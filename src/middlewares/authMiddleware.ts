import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import * as z from "zod";

import ValidateRequestDataProps from "../@types/validateRequestData";

import validateRequestData from "../utils/validateRequestData";

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
        adminPassword: z.string().min(6).optional(),
    });

    const { id } = createDataParams.parse(request.params);
    const { email, password, adminPassword } = createDataBody.parse(
        request.body
    );

    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return reply.status(401).send({ error: "Unauthorized" });
    }

    const token = authHeader.substring(7);
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        throw new Error("Secret key not set");
    }

    try {
        jwt.verify(token, secretKey);

        const error: ValidateRequestDataProps | null =
            await validateRequestData(id, email, password, adminPassword);

        if (error) {
            return reply.status(error.status).send({ error: error.error });
        }

        done();
    } catch (error) {
        return reply.status(401).send({ error: "Unauthorized" });
    }
};

export default authMiddleware;
