import { z } from "zod";

export const createTagSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener mínimo 2 caracteres")
    .max(50, "El nombre es muy largo"),

  color: z
    .string()
    .min(4, "Color inválido")
    .max(20, "Color inválido"),
});

export type CreateTagDto = z.infer<typeof createTagSchema>;