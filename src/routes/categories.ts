import { FastifyInstance } from 'fastify';

const categoryRoutes = async (server: FastifyInstance) => {
    server.get('/category', async () => {
        return "categories";
    });
};

export default categoryRoutes;
