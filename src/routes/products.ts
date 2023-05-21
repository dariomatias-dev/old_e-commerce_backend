import { FastifyInstance } from "fastify";
import * as z from "zod";

import prisma from "../lib/prisma";

const productRoutes = async (server: FastifyInstance) => {
    server.get('/product', async () => {
        return "products";
    });
};

export default productRoutes;
