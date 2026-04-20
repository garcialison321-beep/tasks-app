import { getDb } from "../../config/database";
import { Task } from "./tasks.model";
import { ObjectId } from "mongodb";

export class TasksRepository {
  private collection() {
    return getDb().collection<Task>("tasks");
  }

  // 🟢 CREATE
  async create(data: Task): Promise<Task> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    } as Task;
  }

  // 🟢 GET ALL
  async findAll(): Promise<Task[]> {
    return await this.collection()
      .find({ isActive: true })
      .toArray();
  }

  // 🟢 GET BY ID
  async findById(id: string): Promise<Task | null> {
    if (!ObjectId.isValid(id)) {
      throw new Error("ID inválido");
    }

    return await this.collection().findOne({
      _id: new ObjectId(id),
    });
  }

  // 🟢 DELETE
  async delete(id: string) {
    if (!ObjectId.isValid(id)) {
      throw new Error("ID inválido");
    }

    return await this.collection().deleteOne({
      _id: new ObjectId(id),
    });
  }
}