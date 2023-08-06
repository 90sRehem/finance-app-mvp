import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(3, "O nome deve possuir no mínimo 3 caracteres."),
  lastName: z
    .string()
    .min(3, "O sobrenome deve possuir no mínimo 3 caracteres."),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    ),
});
