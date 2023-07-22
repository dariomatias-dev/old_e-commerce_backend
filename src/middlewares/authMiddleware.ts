import { FastifyRequest, FastifyReply } from "fastify";
import jwt, { JwtPayload } from "jsonwebtoken";
import * as z from "zod";

import ValidateRequestDataProps from "../@types/validateRequestData";

import validateRequestData from "../utils/validateRequestData";
import idParamSchema from "../schemas/id_param_schema";

interface DecodedTokenProps extends JwtPayload {
    email: string;
}

const authMiddleware = async (
    request: FastifyRequest,
    reply: FastifyReply,
    done: () => void
) => {
    const createDataBody = z.object({
        email: z.string().email(),
        password: z.string().min(6),
        adminPassword: z.string().min(6).optional(),
    });

    const { id } = idParamSchema.parse(request.params);
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
        const decodedToken = jwt.verify(token, secretKey) as DecodedTokenProps;

        if (decodedToken.email !== email) {
            reply.status(401).send({ error: "Invalid token" });
        }

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
