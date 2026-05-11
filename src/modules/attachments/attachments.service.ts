import { ObjectId } from "mongodb";
import { AttachmentsRepository } from "./attachments.repository";
import { Attachment } from "./attachments.model";
import { CreateAttachmentDto } from "./attachments.schema";

export class AttachmentsService {
  private repository = new AttachmentsRepository();

  async create(
    data: CreateAttachmentDto,
    userId: string
  ): Promise<Attachment> {

    const now = new Date();

    const attachment: Attachment = {
      taskId: new ObjectId(data.taskId),
      fileName: data.fileName,
      fileUrl: data.fileUrl,
      uploadedBy: new ObjectId(userId),
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(attachment);
  }

  async findByTask(taskId: string): Promise<Attachment[]> {
    return await this.repository.findByTask(taskId);
  }

  async delete(id: string): Promise<void> {
    const attachment = await this.repository.findById(id);

    if (!attachment) {
      throw new Error("El attachment no existe");
    }

    await this.repository.delete(id);
  }
}