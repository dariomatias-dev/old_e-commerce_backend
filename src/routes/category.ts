import { FastifyInstance } from "fastify";
import * as z from "zod";

import prisma from "../lib/prisma";

const categoryRoutes = async (server: FastifyInstance) => {
    // Search user based on ID
    server.get("/category/:id", async (request, reply) => {
        const createCategoryParams = z.object({
            id: z.string().uuid(),
        });

        const id = createCategoryParams.parse(request.params);

        try {
            const category = await prisma.categories.findUnique({
                where: id,
            });

            return category;
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Search all categories
    server.get("/categories", async (_, reply) => {
        try {
            const categories = await prisma.categories.findMany();

            return categories;
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Create category
    server.post("/category", async (request, reply) => {
        const createCategoryBody = z.object({
            name: z.string(),
            imageUrlId: z.string(),
        });

        const data = createCategoryBody.parse(request.body);

        try {
            await prisma.categories.create({
                data,
            });

            return "success";
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Update category
    server.patch("/category/:id", async (request, reply) => {
        const createCategoryParams = z.object({
            id: z.string().uuid(),
        });

        const createCategoryBody = z.object({
            name: z.string().optional(),
        });

        const id = createCategoryParams.parse(request.params);
        const data = createCategoryBody.parse(request.body);

        try {
            await prisma.categories.update({
                where: id,
                data,
            });

            return "success";
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Delete category
    server.delete("/category/:id", async (request, reply) => {
        const createCategoryParams = z.object({
            id: z.string().uuid(),
        });

        const id = createCategoryParams.parse(request.params);

        try {
            await prisma.categories.delete({
                where: id,
            });

            return "success";
        } catch (err) {
            return reply.status(500).send(err);
        }
    });
};

export default categoryRoutes;
