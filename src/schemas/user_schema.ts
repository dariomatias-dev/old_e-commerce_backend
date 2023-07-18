import * as z from "zod";

const userSchema = z.object({
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(6),
    birthdate: z.string().refine((value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
    }, "Invalid date format."),
    phone: z.string().min(17).max(17),
    address: z.string().min(6).max(50),
    city: z.string().min(3).max(30),
    state: z.string().min(3).max(30),
    cep: z.string().min(9).max(9),
    country: z.string().min(3).max(30),
    isAdmin: z.boolean().default(false),
});

export default userSchema;
