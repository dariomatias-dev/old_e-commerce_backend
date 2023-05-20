import { FastifyInstance } from 'fastify';

const orderRoutes = async (server: FastifyInstance) => {
    server.get('/order', async () => {
        return "orders";
    });
};

export default orderRoutes;
