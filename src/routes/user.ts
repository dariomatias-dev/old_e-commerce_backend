import { FastifyInstance } from "fastify";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as z from "zod";

import prisma from "../lib/prisma";

import authMiddleware from "../middlewares/authMiddleware";

import getQueries from "../utils/getQueries";
import setSkipAndTake from "../utils/setSkipAndTake";

const userRoutes = async (server: FastifyInstance) => {
    // Search user based on id
    server.post(
        "/user/:id",
        { preHandler: authMiddleware },
        async (request, reply) => {
            const createUserParams = z.object({
                id: z.string().uuid(),
            });

            const id = createUserParams.parse(request.params);

            try {
                const user = await prisma.users.findUnique({
                    where: id,
                });

                return user;
            } catch (err) {
                return reply.status(500).send(err);
            }
        }
    );

    // Count the total amount of users
    server.get("/users-amount", async (_, reply) => {
        try {
            const usersAmount = await prisma.users.count();

            return usersAmount;
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    server.get("/user-orders/:id", async (request, reply) => {
        const createUserOrdersParams = z.object({
            id: z.string().uuid(),
        });

        const { id } = createUserOrdersParams.parse(request.params);
        const { skip, take } = getQueries(request);

        try {
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
        } catch (err) {
            reply.status(500).send(err);
        }
    });

    // Search all users
    server.get("/users", async (request, reply) => {
        const { skip, take } = getQueries(request);

        try {
            const users = await prisma.users.findMany({
                take,
                skip,
            });

            return {
                users,
                ...setSkipAndTake(skip, take),
            };
        } catch (err) {
            reply.status(500).send(err);
        }
    });

    // Create user
    server.post("/user", async (request, reply) => {
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

        const payload = { email: data.email, password: data.password };
        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            throw new Error("Chave secreta não definida.");
        }

        try {
            await prisma.users.create({
                data: {
                    ...data,
                    password,
                },
            });

            const token = jwt.sign(payload, secretKey);

            return { token };
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Update user
    server.patch(
        "/user/:id",
        { preHandler: authMiddleware },
        async (request, reply) => {
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

            try {
                await prisma.users.update({
                    where: id,
                    data,
                });

                return "success";
            } catch (err) {
                return reply.status(500).send(err);
            }
        }
    );

    // Delete user
    server.delete(
        "/user/:id",
        { preHandler: authMiddleware },
        async (request, reply) => {
            const createUserParams = z.object({
                id: z.string().uuid(),
            });

            const id = createUserParams.parse(request.params);

            try {
                await prisma.users.delete({
                    where: id,
                });

                return "success";
            } catch (err) {
                return reply.status(500).send(err);
            }
        }
    );
};

export default userRoutes;
