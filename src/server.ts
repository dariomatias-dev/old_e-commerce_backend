import fastify from "fastify";
import cors from '@fastify/cors';

import userRoutes from "./routes/users";
import categoryRoutes from './routes/categories';
import productRoutes from './routes/products';
import orderRoutes from './routes/orders';

const server = fastify({ logger: true });

server.register(cors);
server.register(userRoutes);
server.register(categoryRoutes);
server.register(productRoutes);
server.register(orderRoutes);

server
    .listen({ port: 3333 })
    .then(() => {
        console.log("Server running in PORT 3333!");
    });
