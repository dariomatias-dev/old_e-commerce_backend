import { FastifyInstance } from "fastify";

import prisma from "../lib/prisma";

import categorySchema from "../schemas/category_schema";
import idParamSchema from "../schemas/id_param_schema";

const categoryRoutes = async (server: FastifyInstance) => {
    // Search user based on ID
    server.get("/category/:id", async (request, reply) => {
        const id = idParamSchema.parse(request.params);

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
        const createCategoryBody = categorySchema;

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
        const createCategoryBody = categorySchema.partial();

        const id = idParamSchema.parse(request.params);
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
        const id = idParamSchema.parse(request.params);

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
