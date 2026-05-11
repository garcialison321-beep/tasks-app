import { Request, Response, NextFunction } from "express";
import { TagsService } from "./tags.service";
import { createTagSchema } from "./tags.schema";

export class TagsController {
  private service = new TagsService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = createTagSchema.parse(req.body);
      const userId = (req as any).user?.sub;

      if (!userId) {
        return res.status(401).json({
          message: "Usuario no autenticado",
        });
      }

      const tag = await this.service.create(data, userId);

      return res.status(201).json(tag);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const tags = await this.service.findAll();
      return res.status(200).json(tags);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      await this.service.delete(id);

      return res.status(200).json({
        message: "Tag eliminado correctamente",
      });
    } catch (error) {
      next(error);
    }
  };
}