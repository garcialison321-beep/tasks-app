import { z } from "zod";

export const createNotificationSchema = z.object({
  userId: z.string().min(1, "El userId es obligatorio"),

  title: z
    .string()
    .min(3, "El título es obligatorio")
    .max(100, "Título demasiado largo"),

  message: z
    .string()
    .min(3, "El mensaje es obligatorio")
    .max(300, "Mensaje demasiado largo"),

  type: z.enum([
    "task_assigned",
    "comment_added",
    "project_created",
    "task_completed",
  ]),
});

export type CreateNotificationDto =
  z.infer<typeof createNotificationSchema>;