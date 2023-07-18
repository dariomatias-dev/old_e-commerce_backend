import { FastifyInstance } from "fastify";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as z from "zod";

import prisma from "../lib/prisma";

const authRoutes = async (server: FastifyInstance) => {
    // Login
    server.post("/auth/login/:userId", async (request, reply) => {
        const createLoginParams = z.object({
            userId: z.string().uuid(),
        });

        const createLoginBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
        });

        const { userId } = createLoginParams.parse(request.params);
        const { email, password } = createLoginBody.parse(request.body);

        const payload = { userId, email };
        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            throw new Error("Secret key not set.");
        }

        try {
            const token = jwt.sign(payload, secretKey);

            const user = await prisma.users.findUnique({
                where: {
                    id: userId,
                },
            });

            if (!user) {
                return reply.status(401).send({ error: "User not found." });
            }

            if (email !== user?.email) {
                return reply.status(401).send({ error: "Invalid email." });
            }

            const isValidPassword = await bcrypt.compare(
                password,
                user.password
            );

            if (!isValidPassword) {
                return reply.status(401).send({ error: "Invalid password." });
            }

            reply.send({ token });
        } catch (err) {
            reply.status(401).send(err);
        }
    });

    // Logout
    server.post("/auth/logout", async (request) => {});
};

export default authRoutes;
