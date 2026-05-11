import { ObjectId } from "mongodb";

export interface Attachment {
  _id?: ObjectId;
  taskId: ObjectId;
  fileName: string;
  fileUrl: string;
  uploadedBy: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}