import { ObjectId } from "mongodb";

export interface ActivityLog {
  _id?: ObjectId;

  userId: ObjectId;

  action: string;

  entity: string;

  entityId: ObjectId;

  description: string;

  createdAt: Date;
}