import { ObjectId } from "mongodb";

export interface Tag {
  _id?: ObjectId;
  name: string;
  color: string;
  createdBy: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}