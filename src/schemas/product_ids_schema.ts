import * as z from "zod";

const productIdsSchema = z.object({
    productIds: z.string().uuid().array(),
});

export default productIdsSchema;
