import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as z from "zod";

import prisma from "../lib/prisma";

const authMiddleware = async (
    request: FastifyRequest,
    reply: FastifyReply,
    done: () => void
) => {
    const createDataParams = z.object({
        id: z.string().uuid(),
    });

    const createDataBody = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });

    const userId = createDataParams.parse(request.params);
    const { email, password } = createDataBody.parse(request.body);

    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return reply.status(401).send({ error: "Unauthorized" });
    }

    const token = authHeader.substring(7);
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        throw new Error("Chave secreta não definida.");
    }

    try {
        jwt.verify(token, secretKey);

        const user = await prisma.users.findUnique({
            where: { id: userId.id },
        });

        if (!user) {
            return reply.status(401).send({ error: "User not found." });
        }

        if (email !== user?.email) {
            return reply.status(401).send({ error: "Invalid email." });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return reply.status(401).send({ error: "Invalid password." });
        }

        done();
    } catch (error) {
        return reply.status(401).send({ error: "Unauthorized" });
    }
};

export default authMiddleware;
