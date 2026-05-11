import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Tag } from "./tags.model";

export class TagsRepository {
  private collection() {
    return getDb().collection<Tag>("tags");
  }

  async create(data: Tag): Promise<Tag> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findAll(): Promise<Tag[]> {
    return this.collection().find().toArray();
  }

  async findById(id: string): Promise<Tag | null> {
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