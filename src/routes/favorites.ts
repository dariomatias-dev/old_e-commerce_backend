import { FastifyInstance } from "fastify";
import * as z from "zod";

import prisma from "../lib/prisma";
import formattedProducts from "../utils/formattedProducts";

import getQueries from "../utils/getQueries";
import setSkipAndTake from "../utils/setSkipAndTake";

type ProductProps = {
  id: string;
  name: string;
  price: string;
  imageUrlIds: string[];
};

const favoritesRoutes = async (server: FastifyInstance) => {
  server.get("/favorite/:userId", async (request) => {
    const createFavoriteParams = z.object({
      userId: z.string().uuid(),
    });

    const userId = createFavoriteParams.parse(request.params);

    const favorite = prisma.favorites.findUnique({
      where: userId,
    });

    return favorite;
  });

  server.get("/favorites/:userId", async (request) => {
    const createFavoritesParams = z.object({
      userId: z.string().uuid(),
    });

    const userId = createFavoritesParams.parse(request.params);

    const result = await prisma.favorites.findUnique({
      where: userId,
    });

    return result?.productIds.length ? result?.productIds : [];
  });

  server.get("/favorite-products", async (request) => {
    const { skip, take } = getQueries(request);

    const createFavoriteProductsParams = z.object({
      productIds: z.string().uuid().array(),
    });

    const { productIds } = createFavoriteProductsParams.parse(request.query);

    const products: ProductProps[] = [];

    for (let productId of productIds) {
      const product = await prisma.products.findUnique({
        where: {
          id: productId,
        },
        select: {
          id: true,
          name: true,
          price: true,
          imageUrlIds: true,
        },
      });

      products.push(product as ProductProps);
    }

    return {
      products: formattedProducts(products),
      ...setSkipAndTake(skip, take),
    };
  });

  server.post("/favorite/:userId", async (request) => {
    const createFavoriteParams = z.object({
      userId: z.string().uuid(),
    });

    const createFavoriteBody = z.object({
      productIds: z.string().array(),
    });

    const { userId } = createFavoriteParams.parse(request.params);
    const { productIds } = createFavoriteBody.parse(request.body);

    await prisma.favorites.create({
      data: {
        userId,
        productIds,
      },
    });

    return "success";
  });

  server.patch("/favorite/:userId", async (request) => {
    const createFavoriteParams = z.object({
      userId: z.string().uuid(),
    });

    const createfavoriteBody = z.object({
      productIds: z.string().uuid().array(),
    });

    const userId = createFavoriteParams.parse(request.params);
    const data = createfavoriteBody.parse(request.body);

    await prisma.favorites.update({
      where: userId,
      data,
    });

    return "success";
  });

  server.delete("/favorite/:userId", async (request) => {
    const createFavoriteParams = z.object({
      userId: z.string().uuid(),
    });

    const userId = createFavoriteParams.parse(request.params);

    await prisma.favorites.delete({
      where: userId,
    });

    return "success";
  });
};

export default favoritesRoutes;
