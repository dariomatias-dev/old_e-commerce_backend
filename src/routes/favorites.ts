import { FastifyInstance } from 'fastify';
import * as zod from "zod";

import prisma from '../lib/prisma';
import formattedProducts from '../utils/formattedProducts';

import getQueries from '../utils/getQueries';
import setSkipAndTake from '../utils/setSkipAndTake';

type ProductProps = {
    id: string;
    name: string;
    price: string;
    imageUrlIds: string[];
};

const favoritesRoutes = async (server: FastifyInstance) => {
    server.get("/favorite/:userId", async (request) => {
        const createFavoriteParams = zod.object({
            userId: zod.string().uuid(),
        });

        const userId = createFavoriteParams.parse(request.params);

        const favorite = prisma.favorites.findUnique({
            where: userId,
        });

        return favorite;
    });

    server.get("/favorite-products", async (request) => {
        const { skip, take } = getQueries(request);

        const createFavoriteProductsParams = zod.object({
            productIds: zod.string().uuid().array(),
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

    server.post("/favorite", async (request) => {
        const createFavoritesBody = zod.object({
            userId: zod.string().uuid(),
            productIds: zod.string().uuid().array(),
        });

        const data = createFavoritesBody.parse(request.body);
        console.log(data);

        await prisma.favorites.create({
            data,
        });

        return "success";
    });

    server.patch("/favorite/:userId", async (request) => {
        const createFavoriteParams = zod.object({
            userId: zod.string().uuid(),
        });

        const createfavoriteBody = zod.object({
            productIds: zod.string().uuid().array(),
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
        const createFavoriteParams = zod.object({
            userId: zod.string().uuid(),
        });

        const userId = createFavoriteParams.parse(request.params);

        await prisma.favorites.delete({
            where: userId,
        });

        return "success";
    });
};

export default favoritesRoutes;
