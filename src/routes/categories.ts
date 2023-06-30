import { FastifyInstance } from "fastify";
import * as z from "zod";

import prisma from "../lib/prisma";

const categoryRoutes = async (server: FastifyInstance) => {
    server.get("/category/:id", async (request) => {
        const createCategoryParams = z.object({
            id: z.string().uuid(),
        });

        const id = createCategoryParams.parse(request.params);

        const category = await prisma.categories.findUnique({
            where: id,
        });

        return category;
    });

    server.get("/categories", async () => {
        const categories = await prisma.categories.findMany();

        return categories;
    });

    server.post("/category", async (request) => {
        const createCategoryBody = z.object({
            name: z.string(),
            imageUrlId: z.string(),
        });

        const data = createCategoryBody.parse(request.body);

        await prisma.categories.create({
            data,
        });

        return "success";
    });

    server.patch("/category/:id", async (request) => {
        const createCategoryParams = z.object({
            id: z.string().uuid(),
        });

        const createCategoryBody = z.object({
            name: z.string().optional(),
        });

        const id = createCategoryParams.parse(request.params);
        const data = createCategoryBody.parse(request.body);

        await prisma.categories.update({
            where: id,
            data,
        });

        return "success";
    });

    server.delete("/category/:id", async (request) => {
        const createCategoryParams = z.object({
            id: z.string().uuid(),
        });

        const id = createCategoryParams.parse(request.params);

        await prisma.categories.delete({
            where: id,
        });

        return "success";
    });
};

export default categoryRoutes;
