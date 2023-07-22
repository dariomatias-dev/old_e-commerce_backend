import * as z from "zod";

const userParamsSchema = z.object({
    id: z.string().uuid(),
    type: z.string().min(12).max(16),
});

export default userParamsSchema;
