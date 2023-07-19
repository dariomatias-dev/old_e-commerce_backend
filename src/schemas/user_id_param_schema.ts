import * as z from "zod";

const userIdParamSchema = z.object({
    userId: z.string().uuid(),
});

export default userIdParamSchema;
