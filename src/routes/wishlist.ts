import { FastifyInstance } from "fastify";

import prisma from "../lib/prisma";

import productIdsSchema from "../schemas/product_ids_schema";
import userIdParamSchema from "../schemas/user_id_param_schema";

const wishlistRoutes = async (server: FastifyInstance) => {
    // Counts the total number of products
    server.get("/wishlist/:userId/amount", async (request, reply) => {
        const userId = userIdParamSchema.parse(request.params);

        try {
            const productsAmount = await prisma.wishlists.count({
                where: userId,
            });

            return productsAmount;
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Search all wishlist product IDs
    server.get("/wishlist/:userId", async (request, reply) => {
        const userId = userIdParamSchema.parse(request.params);

        try {
            const result = await prisma.wishlists.findUnique({
                where: userId,
            });

            return result?.productIds ?? null;
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Update wishlist
    server.put("/wishlist/:userId", async (request, reply) => {
        const { userId } = userIdParamSchema.parse(request.params);
        const data = productIdsSchema.parse(request.body);

        try {
            await prisma.wishlists.update({
                where: {
                    userId,
                },
                data,
            });

            return "success";
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Delete user wishlist
    server.delete("/wishlist/:userId", async (request, reply) => {
        const userId = userIdParamSchema.parse(request.params);

        try {
            await prisma.wishlists.delete({
                where: userId,
            });

            return "success";
        } catch (err) {
            return reply.status(500).send(err);
        }
    });
};

export default wishlistRoutes;
