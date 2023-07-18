import { FastifyInstance } from "fastify";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as z from "zod";

import prisma from "../lib/prisma";

import authMiddleware from "../middlewares/authMiddleware";

import getQueries from "../utils/getQueries";
import setSkipAndTake from "../utils/setSkipAndTake";

const userRoutes = async (server: FastifyInstance) => {
    server.post(
        "/user/:id",
        { preHandler: authMiddleware },
        async (request) => {
            const createUserParams = z.object({
                id: z.string().uuid(),
            });

            const id = createUserParams.parse(request.params);

            const user = await prisma.users.findUnique({
                where: id,
            });

            return user;
        }
    );

    server.get("/users-amount", async () => {
        const usersAmount = await prisma.users.count();

        return usersAmount;
    });

    server.get("/user-orders/:id", async (request) => {
        const createUserOrdersParams = z.object({
            id: z.string().uuid(),
        });

        const { id } = createUserOrdersParams.parse(request.params);
        const { skip, take } = getQueries(request);

        const orders = prisma.orders.findMany({
            take,
            skip,
            where: {
                userId: id,
            },
            include: {
                orderItems: true,
            },
        });

        return {
            orders,
            ...setSkipAndTake(skip, take),
        };
    });

    server.get("/users", async (request) => {
        const { skip, take } = getQueries(request);

        const users = await prisma.users.findMany({
            take,
            skip,
        });

        return {
            users,
            ...setSkipAndTake(skip, take),
        };
    });

    server.post("/user", async (request) => {
        const createUsersBody = z.object({
            firstName: z.string().min(3).max(30),
            lastName: z.string().min(3).max(30),
            email: z.string().email(),
            password: z.string().min(6),
            birthdate: z.string().refine((value) => {
                const date = new Date(value);
                return !isNaN(date.getTime());
            }, "Invalid date format."),
            phone: z.string().min(17).max(17),
            address: z.string().min(6).max(50),
            city: z.string().min(3).max(30),
            state: z.string().min(3).max(30),
            cep: z.string().min(9).max(9),
            country: z.string().min(3).max(30),
        });

        const data = createUsersBody.parse(request.body);
        const password = await bcrypt.hash(data.password, 10);

        await prisma.users.create({
            data: {
                ...data,
                password,
            },
        });

        const payload = { email: data.email, password: data.password };
        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            throw new Error("Chave secreta não definida.");
        }

        const token = jwt.sign(payload, secretKey);

        return { token };
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
