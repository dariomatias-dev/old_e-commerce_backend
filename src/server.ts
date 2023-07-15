import fastify from "fastify";
import cors from '@fastify/cors';

import CartsRoutes from "./routes/carts";
import categoryRoutes from './routes/categories';
import favoritesRoutes from "./routes/favorites";
import orderRoutes from './routes/orders';
import productRoutes from './routes/products';
import userRoutes from "./routes/users";

const server = fastify({ logger: true });

server.register(cors);
server.register(CartsRoutes);
server.register(userRoutes);
server.register(categoryRoutes);
server.register(productRoutes);
server.register(favoritesRoutes);
server.register(orderRoutes);

server
    .listen({ port: 3333 })
    .then(() => {
        console.log("Server running in PORT 3333!");
    });
