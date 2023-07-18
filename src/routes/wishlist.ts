import { FastifyInstance } from "fastify";
import * as z from "zod";

import prisma from "../lib/prisma";

const wishlistRoutes = async (server: FastifyInstance) => {
    // Search all wishlist product IDs
    server.get("/wishlist/:userId", async (request, reply) => {
        const createFavoritesParams = z.object({
            userId: z.string().uuid(),
        });

        const userId = createFavoritesParams.parse(request.params);

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
        const createWishlistParams = z.object({
            userId: z.string().uuid(),
        });

        const createWishlistBody = z.object({
            productIds: z.string().array(),
        });

        const { userId } = createWishlistParams.parse(request.params);
        const data = createWishlistBody.parse(request.body);

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
        const createFavoritesParams = z.object({
            userId: z.string().uuid(),
        });

        const userId = createFavoritesParams.parse(request.params);

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
