import * as z from "zod";

const categorySchema = z.object({
    name: z.string(),
    imageUrlId: z.string(),
});

export default categorySchema;
