import { FastifyRequest } from "fastify";
import * as z from "zod";

const getQueries = (request: FastifyRequest, take?: number) => {
    const createQueries = z.object({
        skip: z.string(),
    });

    if (take === undefined) take = 10;

    const skip = Number(createQueries.parse(request.query).skip);

    return { skip, take };
};

export default getQueries;
