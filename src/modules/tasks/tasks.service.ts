import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

export class TasksService {

  async create(data: any, userId: string) {

    const db = getDb();

    const newTask = {

      title: data.title,

      description: data.description,

      projectId: data.projectId,

      priority: data.priority,

      status: data.status,

      createdBy: new ObjectId(userId),

      createdAt: new Date(),
    };

    const result =
      await db.collection("tasks")
      .insertOne(newTask);

    return {
      _id: result.insertedId,
      ...newTask,
    };
  }

  async findAll() {

    const db = getDb();

    return await db
      .collection("tasks")
      .find()
      .toArray();
  }

  async findById(id: string) {

    const db = getDb();

    return await db
      .collection("tasks")
      .findOne({
        _id: new ObjectId(id),
      });
  }

  async findByProject(projectId: string) {

    const db = getDb();

    return await db
      .collection("tasks")
      .find({
        projectId: projectId,
      })
      .toArray();
  }

  async findByUser(userId: string) {

    const db = getDb();

    return await db
      .collection("tasks")
      .find({
        createdBy: new ObjectId(userId),
      })
      .toArray();
  }

  async delete(id: string) {

    const db = getDb();

    return await db
      .collection("tasks")
      .deleteOne({
        _id: new ObjectId(id),
      });
  }
}