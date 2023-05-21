import { FastifyInstance } from "fastify";
import * as z from "zod";

import prisma from "../lib/prisma";

const orderRoutes = async (server: FastifyInstance) => {
    server.get('/order', async () => {
        return "orders";
    });
};

export default orderRoutes;
