import { FastifyInstance } from "fastify";

const authRoutes = async (server: FastifyInstance) => {
    server.post("/auth/login", async (request) => {

    });

    server.post("/auth/logout", async (request) => {

    });
};

export default authRoutes;
