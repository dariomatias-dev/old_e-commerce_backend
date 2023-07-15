import { FastifyInstance } from "fastify";
import { Products } from "@prisma/client";
import * as z from "zod";

import prisma from "../lib/prisma";

import formattedProducts from "../utils/formattedProducts";
import getQueries from "../utils/getQueries";
import setSkipAndTake from "../utils/setSkipAndTake";

const favoritesRoutes = async (server: FastifyInstance) => {
  // Get All Wishlist Product Ids
  server.get("/wishlist/:userId", async (request) => {
    const createFavoritesParams = z.object({
      userId: z.string().uuid(),
    });

    const userId = createFavoritesParams.parse(request.params);

    const result = await prisma.favorites.findUnique({
      where: userId,
    });

    return result?.productIds ?? null;
  });

  server.get("/wishlist-products", async (request) => {
    const { skip, take } = getQueries(request);

    const createFavoriteProductsQuery = z.object({
      productIds: z.string(),
    });

    const { productIds } = createFavoriteProductsQuery.parse(request.query);
    const selectedProductIds = productIds.split(",").slice(skip, skip + take);

    const products: Products[] = [];

    for (let productId of selectedProductIds) {
      const product = await prisma.products.findUnique({
        where: {
          id: productId,
        },
      });

      products.push(product as Products);
    }

    return {
      products: formattedProducts(products),
      ...setSkipAndTake(skip, take),
    };
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

    await prisma.favorites.update({
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

    await prisma.favorites.delete({
      where: userId,
    });

    return "success";
  });
};

export default favoritesRoutes;
