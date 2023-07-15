import { FastifyInstance } from "fastify";
import prisma from "../lib/prisma";
import * as z from "zod";

const CartsRoutes = async (server: FastifyInstance) => {
    // Get All Cart Product Ids
    server.get("/cart/:userId", async (request) => {
        const createCartParams = z.object({
            userId: z.string().uuid(),
        });

        const userId = createCartParams.parse(request.params);

        const result = await prisma.carts.findUnique({
            where: userId,
        });

        return result?.productIds;
    });

    // Update Cart
    server.put("/cart/:userId", async (request) => {
        const createCartParams = z.object({
            userId: z.string().uuid(),
        });

        const createCartBody = z.object({
            productIds: z.string().array(),
        });

        const { userId } = createCartParams.parse(request.params);
        const data = createCartBody.parse(request.body);

        await prisma.carts.update({
            where: {
                userId,
            },
            data,
        });

        return "success";
    });

    // Delete User Cart
    server.delete("/cart/:userId", async (request) => {
        const createCartParams = z.object({
            userId: z.string().uuid(),
        });

        const userId = createCartParams.parse(request.params);

        await prisma.carts.delete({
            where: userId,
        });

        return "success";
    });
};

export default CartsRoutes;
