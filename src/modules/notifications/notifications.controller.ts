import { Request, Response, NextFunction } from "express";
import { NotificationsService } from "./notifications.service";
import { createNotificationSchema } from "./notifications.schema";

export class NotificationsController {

  private service = new NotificationsService();

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

      const data = createNotificationSchema.parse(req.body);

      const notification =
        await this.service.create(data);

      return res.status(201).json(notification);

    } catch (error) {
      next(error);
    }
  };

  findMine = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

      const userId = (req as any).user?.sub;

      if (!userId) {
        return res.status(401).json({
          message: "Usuario no autenticado",
        });
      }

      const notifications =
        await this.service.findByUser(userId);

      return res.status(200).json(notifications);

    } catch (error) {
      next(error);
    }
  };

  markAsRead = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {

      const { id } = req.params;

      await this.service.markAsRead(id);

      return res.status(200).json({
        message: "Notificación leída",
      });

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
        message: "Notificación eliminada",
      });

    } catch (error) {
      next(error);
    }
  };
}