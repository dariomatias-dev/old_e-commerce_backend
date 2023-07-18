import { FastifyInstance } from "fastify";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as z from "zod";

import prisma from "../lib/prisma";

const authRoutes = async (server: FastifyInstance) => {
    server.post("/auth/login", async (request, reply) => {
        const createLoginBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
        });

        const { email, password } = createLoginBody.parse(request.body);

        const payload = { email, password };
        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            throw new Error("Chave secreta não definida.");
        }

        try {
            const token = jwt.sign(payload, secretKey);

            const user = await prisma.users.findUnique({
                where: {
                    email: email,
                },
            });

            if (!user) {
                return reply
                    .status(401)
                    .send({ error: "Usuário não encontrado." });
            }

            const isValidPassword = await bcrypt.compare(
                password,
                user.password
            );

            if (!isValidPassword) {
                return reply.status(401).send({ error: "Senha inválida." });
            }

            reply.send({ token });
        } catch (err) {
            reply.status(401).send(err);
        }
    });

    server.post("/auth/logout", async (request) => {});
};

export default authRoutes;
