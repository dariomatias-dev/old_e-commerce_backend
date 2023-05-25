import { FastifyInstance } from "fastify";
import { Prisma } from "@prisma/client";
import * as z from "zod";

import prisma from "../lib/prisma";

const orderRoutes = async (server: FastifyInstance) => {
    server.get('/order/:id', async (request) => {
        const createOrderParams = z.object({
            id: z.string().uuid(),
        });

        const id = createOrderParams.parse(request.params);

        const orders = await prisma.orders.findUnique({
            where: id,
            include: {
                orderItems: true,
            },
        });

        return orders;
    });

    server.get("/orders", async () => {
        const order = await prisma.orders.findMany({
            include: {
                orderItems: true,
            },
        });

        return order;
    });

    server.post("/order", async (request) => {
        const orderItemProps = z.object({
            productId: z.string().uuid(),
            quantity: z.number().positive().min(1).max(20),
            unitPrice: z.string().min(1).max(10),
        });

        const createOrderBody = z.object({
            userId: z.string().uuid(),
            orderItems: orderItemProps.array().min(1).max(20),
            totalAmount: z.string().min(1).max(10),
        });

        const { userId, orderItems, totalAmount } = createOrderBody.parse(request.body);

        await prisma.orders.create({
            data: {
                userId: userId,
                orderItems: {
                    create: orderItems.map(({ productId, quantity, unitPrice }) => {
                        return {
                            productId,
                            quantity,
                            unitPrice,
                        };
                    }),
                },
                totalAmount: totalAmount,
            },
        });

        return "success";
    });

    server.patch("/order/:id", async (request) => {
        const createOrderParams = z.object({
            id: z.string().uuid(),
        });

        const orderItemProps = z.object({
            productId: z.string().uuid(),
            quantity: z.number().positive().min(1).max(20),
            unitPrice: z.string().min(1).max(10),
        });

        const createOrderBody = z.object({
            userId: z.string().uuid().optional(),
            orderItemIdsToDelete: z.string().uuid().array().max(20).optional(),
            orderItems: orderItemProps.array().min(1).max(20).optional(),
            totalAmount: z.string().min(1).max(10).optional(),
        });

        const id = createOrderParams.parse(request.params);
        const { userId, orderItemIdsToDelete, orderItems, totalAmount } = createOrderBody.parse(request.body);


        let data: Prisma.OrdersUpdateInput;

        if (orderItems?.length) {
            data = {
                userId,
                orderItems: {
                    create: orderItems.map(({ productId, quantity, unitPrice }) => {
                        return {
                            productId,
                            quantity,
                            unitPrice,
                        };
                    }),
                },
                totalAmount,
            };
        } else {
            if (orderItemIdsToDelete?.length) {
                let orderItemsdata: z.TypeOf<typeof orderItemProps>[] = [];

                for (let orderItemId of orderItemIdsToDelete) {
                    const orderItemData = await prisma.orderItems.findUnique({
                        where: {
                            id: orderItemId,
                        },
                    });

                    orderItemsdata.push(orderItemData as z.TypeOf<typeof orderItemProps>);

                    await prisma.orders.update({
                        where: id,
                        data: {
                            orderItems: {
                                delete: {
                                    id: orderItemId,
                                },
                            },
                        },
                    });
                }

                return orderItemsdata;
            }

            data = {
                userId,
                totalAmount,
            };
        }

        await prisma.orders.update({
            where: id,
            data,
        });

        return "success";
    });

    server.delete("/order/:id", async (request) => {
        const createOrderParams = z.object({
            id: z.string().uuid(),
        });

        const id = createOrderParams.parse(request.params);

        await prisma.orders.delete({
            where: id,
        });

        return "success";
    });
};

export default orderRoutes;
