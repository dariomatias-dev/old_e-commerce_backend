import { FastifyInstance } from "fastify";
import * as z from "zod";

import prisma from "../lib/prisma";
import formattedProducts from "../utils/formattedProducts";

const productRoutes = async (server: FastifyInstance) => {
    server.get("/product/:id", async (request) => {
        const createProductParams = z.object({
            id: z.string().uuid(),
        });

        const id = createProductParams.parse(request.params);

        const product = await prisma.products.findUnique({
            where: id,
        });

        return product;
    });

    server.get("/product-category/:id", async (request) => {
        const createProductCategoryParams = z.object({
            id: z.string().uuid(),
        });

        const { id } = createProductCategoryParams.parse(request.params);

        const productCategory = await prisma.products.findMany({
            where: {
                categoryIds: {
                    equals: id,
                },
            },
            select: {
                id: true,
                name: true,
                imageUrlIds: true,
                price: true,
            },
        });

        return formattedProducts(productCategory);
    });

    server.get("/products", async () => {
        const products = await prisma.products.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                imageUrlIds: true,
            },
        });

        return formattedProducts(products);
    });

    server.post("/product", async (request) => {
        const createProductBody = z.object({
            name: z.string().min(4).max(30),
            description: z.string().min(20).max(2000),
            imageUrlIds: z.string().array().min(1).max(10),
            price: z.string().min(1).max(6),
            categoryId: z.string().array().min(1).max(10),
        });

        const data = createProductBody.parse(request.body);

        await prisma.products.create({
            data,
        });

        return "success";
    });

    server.patch("/product/:id", async (request) => {
        const createProductParams = z.object({
            id: z.string().uuid(),
        });

        const createProductBody = z.object({
            name: z.string().min(4).max(30).optional(),
            description: z.string().min(20).max(2000).optional(),
            imageUrlIds: z.string().array().min(1).max(10).optional(),
            price: z.string().min(1).max(6).optional(),
            categoryId: z.string().array().min(1).max(10).optional(),
        });

        const id = createProductParams.parse(request.params);
        const data = createProductBody.parse(request.body);

        await prisma.products.update({
            where: id,
            data,
        });

        return "success";
    });

    server.delete("/product/:id", async (request) => {
        const createProductParams = z.object({
            id: z.string().uuid(),
        });

        const id = createProductParams.parse(request.params);

        await prisma.products.delete({
            where: id,
        });

        return "success";
    });
};

export default productRoutes;
