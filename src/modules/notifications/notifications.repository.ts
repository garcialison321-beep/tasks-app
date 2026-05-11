import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Notification } from "./notifications.model";

export class NotificationsRepository {

  private collection() {
    return getDb().collection<Notification>("notifications");
  }

  async create(data: Notification): Promise<Notification> {

    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findByUser(userId: string): Promise<Notification[]> {

    return this.collection()
      .find({
        userId: new ObjectId(userId),
      })
      .sort({ createdAt: -1 })
      .toArray();
  }

  async findById(id: string): Promise<Notification | null> {

    return this.collection().findOne({
      _id: new ObjectId(id),
    });
  }

  async markAsRead(id: string) {

    return this.collection().updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          isRead: true,
          updatedAt: new Date(),
        },
      }
    );
  }

  async delete(id: string) {

    return this.collection().deleteOne({
      _id: new ObjectId(id),
    });
  }
}