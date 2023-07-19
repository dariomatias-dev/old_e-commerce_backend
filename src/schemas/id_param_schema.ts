import * as z from "zod";

const idParamSchema = z.object({
    id: z.string().uuid(),
});

export default idParamSchema;
