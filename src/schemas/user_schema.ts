import * as z from "zod";

const userSchema = z.object({
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    dateOfBirth: z.string().refine((value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
    }, "Invalid date format."),
    phone: z.string().min(17).max(18),
    cpf: z.string().min(14).max(15),
    rg: z.string().min(8).max(9),
    email: z.string().email(),
    state: z.string().min(3).max(30),
    city: z.string().min(3).max(30),
    address: z.string().min(6).max(50),
    cep: z.string().min(9).max(10),
    password: z.string().min(6),
    termsOfUse: z.boolean(),
    receiveMessages: z.boolean(),
});

export default userSchema;
