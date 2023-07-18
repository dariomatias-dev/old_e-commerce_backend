import fastify from "fastify";
import cors from "@fastify/cors";

import authRoutes from "./routes/auth";
import cartRoutes from "./routes/cart";
import categoryRoutes from "./routes/category";
import orderRoutes from "./routes/order";
import productRoutes from "./routes/product";
import userRoutes from "./routes/user";
import wishlistRoutes from "./routes/wishlist";

const server = fastify({ logger: true });

server.register(cors);
server.register(authRoutes);
server.register(cartRoutes);
server.register(categoryRoutes);
server.register(orderRoutes);
server.register(productRoutes);
server.register(userRoutes);
server.register(wishlistRoutes);

server.listen({ port: 3333 }).then(() => {
    console.log("Server running in PORT 3333!");
});
