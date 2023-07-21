import * as z from "zod";

const legalPersonUserSchema = z.object({
    fantasyName: z.string().min(3).max(30),
    corporateName: z.string().min(3).max(30),
    phone: z.string().min(17).max(18),
    cnpj: z.string().min(18).max(19),
    stateRegistration: z.string().min(15).max(16),
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

export default legalPersonUserSchema;
