import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { ActivityLog } from "./activityLogs.model";

export class ActivityLogsRepository {

  private collection() {
    return getDb().collection<ActivityLog>("activityLogs");
  }

  async create(data: ActivityLog) {

    const result =
      await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findAll() {

    return this.collection()
      .find()
      .sort({ createdAt: -1 })
      .toArray();
  }

  async findByUser(userId: string) {

    return this.collection()
      .find({
        userId: new ObjectId(userId),
      })
      .sort({ createdAt: -1 })
      .toArray();
  }
}