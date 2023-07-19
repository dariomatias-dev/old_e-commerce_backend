import * as z from "zod";

const productSchema = z.object({
    name: z.string().min(4).max(30),
    description: z.string().min(20).max(2000),
    imageUrlIds: z.string().array().min(1).max(10),
    price: z.string().min(1).max(6),
    categoryId: z.string().array().min(1).max(10),
});

export default productSchema;
