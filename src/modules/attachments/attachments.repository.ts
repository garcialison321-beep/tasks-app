import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Attachment } from "./attachments.model";

export class AttachmentsRepository {
  private collection() {
    return getDb().collection<Attachment>("attachments");
  }

  async create(data: Attachment): Promise<Attachment> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findByTask(taskId: string): Promise<Attachment[]> {
    return this.collection()
      .find({
        taskId: new ObjectId(taskId),
      })
      .toArray();
  }

  async findById(id: string): Promise<Attachment | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
    });
  }

  async delete(id: string) {
    return this.collection().deleteOne({
      _id: new ObjectId(id),
    });
  }
}