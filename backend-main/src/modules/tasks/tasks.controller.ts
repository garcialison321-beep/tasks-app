import { Request, Response, NextFunction } from "express";
import { TasksService } from "./tasks.service";

export class TasksController {
  private service = new TasksService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = (req as any).user?.sub;

      const task = await this.service.create(req.body, userId);

      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (_req: Request, res: Response) => {
    const tasks = await this.service.findAll();
    res.json(tasks);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(req.params.id);
    res.json({ message: "Tarea eliminada" });
  };
}