import { Request, Response } from "express";

export class TasksController {

  async getTasks(req: Request, res: Response) {
    try {
      return res.json({
        message: "Lista de tareas",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener tareas",
      });
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      return res.json({
        message: "Tarea creada",
        data: req.body,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear tarea",
      });
    }
  }
}