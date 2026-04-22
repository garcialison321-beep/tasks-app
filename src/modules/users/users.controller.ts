import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
  private userService = new UsersService();

  async findAllUsers(req: Request, res: Response) {
    try {
      const users: any[] = await this.userService.findAll();

      const usersWithoutPassword = users.map((user: any) => {
        const { password, ...rest } = user;
        return rest;
      });

      return res.json(usersWithoutPassword);
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener usuarios",
      });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const user: any = await this.userService.create(req.body);

      const { password, ...userWithoutPassword } = user;

      return res.json(userWithoutPassword);
    } catch (error) {
      return res.status(500).json({
        message: "Error al crear usuario",
      });
    }
  }
}