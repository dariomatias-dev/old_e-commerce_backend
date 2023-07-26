import { FastifyInstance } from "fastify";
import { Products } from "@prisma/client";
import * as z from "zod";

import prisma from "../lib/prisma";

import productSchema from "../schemas/product_schema";

import formattedProducts from "../utils/formattedProducts";
import getQueries from "../utils/getQueries";
import setSkipAndTake from "../utils/setSkipAndTake";
import idParamSchema from "../schemas/id_param_schema";

const productRoutes = async (server: FastifyInstance) => {
    // Search for the product that has the ID sent
    server.get("/product/:id", async (request, reply) => {
        const id = idParamSchema.parse(request.params);

        try {
            const product = await prisma.products.findUnique({
                where: id,
            });

            return product;
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Counts the total number of products
    server.get("/products/amount", async (_, reply) => {
        try {
            const productsAmount = await prisma.products.count();

            return productsAmount;
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Searches for all products that have a given category ID
    server.get("/product-category/:id", async (request, reply) => {
        const { id } = idParamSchema.parse(request.params);
        const { skip, take } = getQueries(request);

        try {
            const productCategory = await prisma.products.findMany({
                take,
                skip,
                where: {
                    categoryIds: {
                        hasSome: [id],
                    },
                },
            });

            return {
                productCategory: formattedProducts(productCategory),
                ...setSkipAndTake(skip, take),
            };
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Search for products that have any of the submitted IDs
    server.get("/products-by-ids", async (request, reply) => {
        const { skip, take } = getQueries(request);

        const createProductsByIdsQuery = z.object({
            productIds: z.string(),
        });

        const { productIds } = createProductsByIdsQuery.parse(request.query);
        const selectedProductIds = productIds
            .split(",")
            .slice(skip, skip + take);

        const products: Products[] = [];

        try {
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
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Counts the number of products that have any of the submitted IDs in their category
    server.get("/products-by-category-ids/amount", async (request, reply) => {
        const createProductsByCategoryIdsAmountParams = z.object({
            productId: z.string().uuid(),
            categoryIds: z.string().transform((value) => {
                return value.split(",");
            }),
        });

        const { productId, categoryIds } =
            createProductsByCategoryIdsAmountParams.parse(request.query);

        if (categoryIds.length === 0) {
            return reply.status(200).send("No similar product.");
        }

        try {
            const amount = await prisma.products.count({
                where: {
                    AND: [
                        {
                            categoryIds: {
                                hasSome: categoryIds,
                            },
                        },
                        {
                            NOT: {
                                id: productId,
                            },
                        },
                    ],
                },
            });

            return amount;
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Search for products that have any of the submitted IDs in their category
    server.get("/products-by-category-ids", async (request, reply) => {
        const { skip, take } = getQueries(request);

        const createProductsByCategoryIdsParams = z.object({
            productId: z.string().uuid(),
            categoryIds: z.string().transform((value) => {
                return value.split(",");
            }),
        });

        const { productId, categoryIds } =
            createProductsByCategoryIdsParams.parse(request.query);

        if (categoryIds.length === 0) {
            return reply.status(200).send("No similar product.");
        }

        try {
            const products = await prisma.products.findMany({
                take,
                skip,
                where: {
                    AND: [
                        {
                            categoryIds: {
                                hasSome: categoryIds,
                            },
                        },
                        {
                            NOT: {
                                id: productId,
                            },
                        },
                    ],
                },
            });

            return {
                products: formattedProducts(products),
                ...setSkipAndTake(skip, take),
            };
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Search products
    server.get("/products", async (request, reply) => {
        const { skip, take } = getQueries(request);

        try {
            const products = await prisma.products.findMany({
                take,
                skip,
            });

            return {
                products: formattedProducts(products),
                ...setSkipAndTake(skip, take),
            };
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Create product
    server.post("/product", async (request, reply) => {
        const createProductBody = productSchema;

        const data = createProductBody.parse(request.body);

        try {
            await prisma.products.create({
                data,
            });

            return "success";
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Update product
    server.patch("/product/:id", async (request, reply) => {
        const createProductBody = productSchema.partial();

        const id = idParamSchema.parse(request.params);
        const data = createProductBody.parse(request.body);

        try {
            await prisma.products.update({
                where: id,
                data,
            });

            return "success";
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Delete product
    server.delete("/product/:id", async (request, reply) => {
        const id = idParamSchema.parse(request.params);

        try {
            await prisma.products.delete({
                where: id,
            });

            return "success";
        } catch (err) {
            return reply.status(500).send(err);
        }
    });
};

export default productRoutes;
