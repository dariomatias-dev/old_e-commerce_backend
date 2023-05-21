import { FastifyInstance } from "fastify";
import * as z from "zod";

import prisma from "../lib/prisma";

const userRoutes = async (server: FastifyInstance) => {
    server.get("/user/:id", async (request) => {
        const createUserParams = z.object({
            id: z.string().uuid(),
        });

        const id = createUserParams.parse(request.params);

        const user = await prisma.users.findUnique({
            where: id,
        });

        return user;
    });

    server.get("/users", async () => {
        const users = await prisma.users.findMany();
        
        return users;
    });

    server.post("/user", async (request) => {
        const createUsersBody = z.object({
            firstName: z.string().min(10).max(30),
            lastName: z.string().min(10).max(30),
            email: z.string().email(),
            password: z.string().min(6).max(20),
            birthdate: z.date(),
            phone: z.string().min(17).max(17),
            address: z.string().min(10).max(50),
            city: z.string().min(10).max(30),
            state: z.string().min(10).max(30),
            cep: z.string().min(9).max(9),
            country: z.string().min(10).max(30),
        });

        const data = createUsersBody.parse(request.body);

        await prisma.users.create({
            data,
        });

        return "success";
    });

    server.patch("/user/:id", async (request) => {
        const createUserParams = z.object({
            id: z.string().uuid(),
        });

        const createUsersBody = z.object({
            firstName: z.string().min(10).max(30).optional(),
            lastName: z.string().min(10).max(30).optional(),
            email: z.string().email().optional(),
            password: z.string().min(6).max(20).optional(),
            birthdate: z.date().optional(),
            phone: z.string().min(17).max(17).optional(),
            address: z.string().min(10).max(50).optional(),
            city: z.string().min(10).max(30).optional(),
            state: z.string().min(10).max(30).optional(),
            cep: z.string().min(9).max(9).optional(),
            country: z.string().min(10).max(30).optional(),
        });

        const id = createUserParams.parse(request.params);
        const data = createUsersBody.parse(request.body);

        await prisma.users.update({
            where: id,
            data,
        });

        return "success";
    });

    server.delete("/user/:id", async (request) => {
        const createUserParams = z.object({
            id: z.string().uuid(),
        });

        const id = createUserParams.parse(request.params);

        await prisma.users.delete({
            where: id,
        });

        return "success";
    });
};

export default userRoutes;
