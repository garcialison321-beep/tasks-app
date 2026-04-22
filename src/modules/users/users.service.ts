import { getDb } from "../../config/database";
import { hashPassword } from "../../libs/bcrypt";

export class UsersService {

  async findAll() {
    const db = getDb();
    return await db.collection("users").find().toArray();
  }

  async findByEmail(email: string) {
    const db = getDb();
    return await db.collection("users").findOne({ email });
  }

  async create(data: any) {
    const db = getDb();

    const hashedPassword = await hashPassword(data.password);

    const newUser = {
      ...data,
      password: hashedPassword,
      role: "user",
    };

    const result = await db.collection("users").insertOne(newUser);

    return {
      _id: result.insertedId,
      ...newUser,
    };
  }
}
