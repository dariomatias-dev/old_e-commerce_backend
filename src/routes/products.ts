import { FastifyInstance } from 'fastify';

const productRoutes = async (server: FastifyInstance) => {
    server.get('/product', async () => {
        return "products";
    });
};

export default productRoutes;
