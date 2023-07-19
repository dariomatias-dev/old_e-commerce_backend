import { FastifyInstance } from "fastify";
import jwt from "jsonwebtoken";
import * as z from "zod";

import ValidateRequestDataProps from "../@types/validateRequestData";

import validateRequestData from "../utils/validateRequestData";

type PayloadProps = {
    email: string;
    isAdmin?: boolean;
};

const authRoutes = async (server: FastifyInstance) => {
    // Login
    server.post("/auth/login", async (request, reply) => {
        const createLoginBody = z.object({
            email: z.string().email(),
            password: z.string().min(6),
            adminPassword: z.string().min(6).optional(),
        });

        const { email, password, adminPassword } = createLoginBody.parse(
            request.body
        );

        let payload: PayloadProps = { email };
        if (adminPassword) {
            payload = { ...payload, isAdmin: true };
        }

        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            throw new Error("Secret key not set.");
        }

        try {
            const token = jwt.sign(payload, secretKey);

            const error: ValidateRequestDataProps | null =
                await validateRequestData(null, email, password, adminPassword);

            if (error) {
                return reply.status(error.status).send({ error: error.error });
            }

            return { token };
        } catch (err) {
            reply.status(401).send(err);
        }
    });

    // Logout
    server.post("/auth/logout", async (request) => {});
};

export default authRoutes;
