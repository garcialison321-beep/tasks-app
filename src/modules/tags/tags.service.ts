import { ObjectId } from "mongodb";
import { TagsRepository } from "./tags.repository";
import { Tag } from "./tags.model";
import { CreateTagDto } from "./tags.schema";

export class TagsService {
  private repository = new TagsRepository();

  async create(data: CreateTagDto, userId: string): Promise<Tag> {
    const now = new Date();

    const tag: Tag = {
      name: data.name,
      color: data.color,
      createdBy: new ObjectId(userId),
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(tag);
  }

  async findAll(): Promise<Tag[]> {
    return await this.repository.findAll();
  }

  async delete(id: string): Promise<void> {
    const tag = await this.repository.findById(id);

    if (!tag) {
      throw new Error("El tag no existe");
    }

    await this.repository.delete(id);
  }
}