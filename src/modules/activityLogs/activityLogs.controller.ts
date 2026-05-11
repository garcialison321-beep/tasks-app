import { Request, Response, NextFunction } from "express";
import { ActivityLogsService } from "./activityLogs.service";
import { createActivityLogSchema } from "./activityLogs.schema";

export class ActivityLogsController {

  private service =
    new ActivityLogsService();

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const data =
        createActivityLogSchema.parse(req.body);

      const userId =
        (req as any).user?.sub;

      if (!userId) {
        return res.status(401).json({
          message: "Usuario no autenticado",
        });
      }

      const log =
        await this.service.create(data, userId);

      return res.status(201).json(log);

    } catch (error) {
      next(error);
    }
  };

  findAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const logs =
        await this.service.findAll();

      return res.status(200).json(logs);

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

      const userId =
        (req as any).user?.sub;

      if (!userId) {
        return res.status(401).json({
          message: "Usuario no autenticado",
        });
      }

      const logs =
        await this.service.findByUser(userId);

      return res.status(200).json(logs);

    } catch (error) {
      next(error);
    }
  };
}