import { ObjectId } from "mongodb";

export type NotificationType =
  | "task_assigned"
  | "comment_added"
  | "project_created"
  | "task_completed";

export interface Notification {
  _id?: ObjectId;

  userId: ObjectId;

  title: string;

  message: string;

  type: NotificationType;

  isRead: boolean;

  createdAt: Date;

  updatedAt: Date;
}