import { Request, Response, NextFunction } from "express";
import { AttachmentsService } from "./attachments.service";
import { createAttachmentSchema } from "./attachments.schema";

export class AttachmentsController {
  private service = new AttachmentsService();

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

      const data = createAttachmentSchema.parse(req.body);

      const userId = (req as any).user?.sub;

      if (!userId) {
        return res.status(401).json({
          message: "Usuario no autenticado",
        });
      }

      const attachment = await this.service.create(data, userId);

      return res.status(201).json(attachment);

    } catch (error) {
      next(error);
    }
  };

  findByTask = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

      const taskId = req.params.taskId as string;

      const attachments = await this.service.findByTask(taskId);

      return res.status(200).json(attachments);

    } catch (error) {
      next(error);
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {

      const { id } = req.params;

      await this.service.delete(id);

      return res.status(200).json({
        message: "Attachment eliminado correctamente",
      });

    } catch (error) {
      next(error);
    }
  };
}