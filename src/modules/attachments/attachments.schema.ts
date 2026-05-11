import { z } from "zod";

export const createAttachmentSchema = z.object({
  taskId: z.string().min(1, "El taskId es obligatorio"),

  fileName: z
    .string()
    .min(2, "El nombre del archivo es obligatorio")
    .max(100, "Nombre demasiado largo"),

  fileUrl: z
    .string()
    .url("Debe ser una URL válida"),
});

export type CreateAttachmentDto = z.infer<typeof createAttachmentSchema>;