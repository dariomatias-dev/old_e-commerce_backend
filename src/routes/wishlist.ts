import { FastifyInstance } from "fastify";
import * as z from "zod";

import prisma from "../lib/prisma";

const wishlistRoutes = async (server: FastifyInstance) => {
  // Get All Wishlist Product Ids
  server.get("/wishlist/:userId", async (request) => {
    const createFavoritesParams = z.object({
      userId: z.string().uuid(),
    });

    const userId = createFavoritesParams.parse(request.params);

    const result = await prisma.wishlists.findUnique({
      where: userId,
    });

    return result?.productIds ?? null;
  });

  // Update Wishlist
  server.put("/wishlist/:userId", async (request) => {
    const createWishlistParams = z.object({
      userId: z.string().uuid(),
    });

    const createWishlistBody = z.object({
      productIds: z.string().array(),
    });

    const { userId } = createWishlistParams.parse(request.params);
    const data = createWishlistBody.parse(request.body);

    await prisma.wishlists.update({
      where: {
        userId,
      },
      data,
    });

    return "success";
  });

  // Delete User Wishlist
  server.delete("/wishlist/:userId", async (request) => {
    const createFavoritesParams = z.object({
      userId: z.string().uuid(),
    });

    const userId = createFavoritesParams.parse(request.params);

    await prisma.wishlists.delete({
      where: userId,
    });

    return "success";
  });
};

export default wishlistRoutes;
