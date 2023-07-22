import { FastifyInstance } from "fastify";
import { LegalPersonUsers, PhysicalPersonUsers } from "prisma/prisma-client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as z from "zod";

import prisma from "../lib/prisma";

import authMiddleware from "../middlewares/authMiddleware";

import physicalPersonUserSchema from "../schemas/physical_person_user_schema";
import idParamSchema from "../schemas/id_param_schema";

import getQueries from "../utils/getQueries";
import setSkipAndTake from "../utils/setSkipAndTake";
import legalPersonUserSchema from "../schemas/legal_person_user_schema";

const userRoutes = async (server: FastifyInstance) => {
    // Search user based on ID
    server.post(
        "/user/:id",
        { preHandler: authMiddleware },
        async (request, reply) => {
            const id = idParamSchema.parse(request.params);

            try {
                const user = await prisma.physicalPersonUsers.findUnique({
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
            const usersAmount = await prisma.physicalPersonUsers.count();

            return usersAmount;
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Search user based on ID along with all their orders
    server.get("/user-orders/:id", async (request, reply) => {
        const { id } = idParamSchema.parse(request.params);
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
            const users = await prisma.physicalPersonUsers.findMany({
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
    server.post("/register-user/:type", async (request, reply) => {
        const createUserParams = z.object({
            type: z.string().min(12).max(16),
        });

        const { type } = createUserParams.parse(request.params);
        const isPhysicalPerson = type === "physical-person";
        const createUserBody = isPhysicalPerson
            ? physicalPersonUserSchema
            : legalPersonUserSchema;

        const data = createUserBody.parse(request.body);
        const email = data.email;
        const password = await bcrypt.hash(data.password, 10);

        if (!data.termsOfUse) {
            reply
                .status(403)
                .send("It is mandatory to accept the terms of services");
        }

        const secretKey = process.env.SECRET_KEY;

        if (!secretKey) {
            throw new Error("Secret key not set");
        }

        try {
            let user: PhysicalPersonUsers | LegalPersonUsers;
            const userRecord = {
                ...data,
                password,
            };

            if (isPhysicalPerson) {
                user = await prisma.physicalPersonUsers.create({
                    data: userRecord as unknown as PhysicalPersonUsers,
                });
            } else {
                user = await prisma.legalPersonUsers.create({
                    data: userRecord as unknown as LegalPersonUsers,
                });
            }

            const userPreferencesData = {
                userId: user.id,
                productIds: [],
            };

            // Create the user's wish list
            await prisma.wishlists.create({ data: userPreferencesData });

            // Create user cart
            await prisma.carts.create({ data: userPreferencesData });

            // Add the user's email if you want to receive offers, promotions, news and much more.
            if (data.receiveMessages) {
                await prisma.newsletterSubscribers.create({
                    data: {
                        email,
                    },
                });
            }

            const payload = {
                email,
            };

            const token = jwt.sign(payload, secretKey);

            return { token };
        } catch (err) {
            return reply.status(500).send(err);
        }
    });

    // Create user with admin access
    // server.post("/admin-user", async (request, reply) => {
    //     const createUsersBody = userSchema.extend({
    //         adminPassword: z.string().min(6),
    //     });

    //     const data = createUsersBody.parse(request.body);
    //     const password = await bcrypt.hash(data.password, 10);
    //     const adminPassword = await bcrypt.hash(data.adminPassword, 10);

    //     const secretKey = process.env.SECRET_KEY;

    //     if (!secretKey) {
    //         throw new Error("Chave secreta não definida.");
    //     }

    //     try {
    //         await prisma.users.create({
    //             data: {
    //                 ...data,
    //                 password,
    //                 adminPassword,
    //             },
    //         });

    //         const payload = {
    //             email: data.email,
    //             isAdmin: data.isAdmin,
    //         };

    //         const token = jwt.sign(payload, secretKey);

    //         return { token };
    //     } catch (err) {
    //         return reply.status(500).send(err);
    //     }
    // });

    // Update user
    server.patch(
        "/user/:id",
        { preHandler: authMiddleware },
        async (request, reply) => {
            let createUsersBody = physicalPersonUserSchema.partial();

            const id = idParamSchema.parse(request.params);
            const data = createUsersBody.parse(request.body);

            try {
                await prisma.physicalPersonUsers.update({
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
        "/user/:id/:type",
        { preHandler: authMiddleware },
        async (request, reply) => {
            const id = idParamSchema.parse(request.params);
            const createUserParams = z.object({
                type: z.string().min(12).max(16),
            });

            const { type } = createUserParams.parse(request.params);
            const isPhysicalPerson = type === "physical-person";

            try {
                let user: PhysicalPersonUsers | LegalPersonUsers;
                if (isPhysicalPerson) {
                    user = await prisma.physicalPersonUsers.delete({
                        where: id,
                    });
                } else {
                    user = await prisma.legalPersonUsers.delete({
                        where: id,
                    });
                }

                // Delete the user wishlist
                await prisma.wishlists.delete({
                    where: {
                        userId: user.id,
                    },
                });

                // Delete the user cart
                await prisma.carts.delete({
                    where: {
                        userId: user.id,
                    },
                });

                const newsletterEmail =
                    await prisma.newsletterSubscribers.findUnique({
                        where: {
                            email: user.email,
                        },
                    });

                // Delete newsletter subscribers user email if exists
                if (newsletterEmail) {
                    await prisma.newsletterSubscribers.delete({
                        where: {
                            email: user.email,
                        },
                    });
                }

                return "success";
            } catch (err) {
                return reply.status(500).send(err);
            }
        }
    );
};

export default userRoutes;
