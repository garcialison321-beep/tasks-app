import { ObjectId } from "mongodb";
import { NotificationsRepository } from "./notifications.repository";
import { Notification } from "./notifications.model";
import { CreateNotificationDto } from "./notifications.schema";

export class NotificationsService {

  private repository = new NotificationsRepository();

  async create(
    data: CreateNotificationDto
  ): Promise<Notification> {

    const now = new Date();

    const notification: Notification = {
      userId: new ObjectId(data.userId),
      title: data.title,
      message: data.message,
      type: data.type,
      isRead: false,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(notification);
  }

  async findByUser(userId: string): Promise<Notification[]> {

    return await this.repository.findByUser(userId);
  }

  async markAsRead(id: string): Promise<void> {

    const notification = await this.repository.findById(id);

    if (!notification) {
      throw new Error("La notificación no existe");
    }

    await this.repository.markAsRead(id);
  }

  async delete(id: string): Promise<void> {

    const notification = await this.repository.findById(id);

    if (!notification) {
      throw new Error("La notificación no existe");
    }

    await this.repository.delete(id);
  }
}