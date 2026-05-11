import { z } from "zod";

export const createActivityLogSchema = z.object({

  action: z.string().min(2),

  entity: z.string().min(2),

  entityId: z.string().min(1),

  description: z.string().min(3),
});

export type CreateActivityLogDto =
  z.infer<typeof createActivityLogSchema>;