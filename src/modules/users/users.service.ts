import { UsersRepository } from "./users.repository";
import { hashPassword } from "../../libs/bcrypt";

export class UsersService {
  private repository = new UsersRepository();

  async register(data: any) {
    const exists = await this.repository.findByEmail(data.email);

    if (exists) {
      throw new Error("El usuario ya existe");
    }

    const hashedPassword = await hashPassword(data.password);

    const user = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: "user",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return await this.repository.create(user);
  }

  async findAllUsers() {
    return await this.repository.findAllUsers();
  }
}
