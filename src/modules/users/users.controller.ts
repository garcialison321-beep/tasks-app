import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {

  private userService = new UsersService();

  findAllUsers = async (req: Request, res: Response) => {

    try {

      const users: any[] =
        await this.userService.findAll();

      const usersWithoutPassword = users.map((user: any) => {

        const { password, ...rest } = user;

        return rest;
      });

      return res.status(200).json(usersWithoutPassword);

    } catch (error: any) {

      console.log(error);

      return res.status(500).json({
        message: error.message || "Error al obtener usuarios",
      });
    }
  };

  register = async (req: Request, res: Response) => {

    try {

      console.log("BODY:", req.body);

      const user: any =
        await this.userService.create(req.body);

      const { password, ...userWithoutPassword } = user;

      return res.status(201).json(userWithoutPassword);

    } catch (error: any) {

      console.log("ERROR REGISTER:", error);

      return res.status(500).json({
        message: error.message || "Error al crear usuario",
      });
    }
  };
}