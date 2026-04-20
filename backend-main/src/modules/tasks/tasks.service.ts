import { TasksRepository } from "./tasks.repository";
import { Task } from "./tasks.model";

export class TasksService {
  private repository = new TasksRepository();

  async create(data: any, userId: string): Promise<Task> {
    const now = new Date();

    const task: Task = {
      title: data.title,
      description: data.description,
      projectId: data.projectId,
      createdBy: userId,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(task);
  }

  async findAll(): Promise<Task[]> {
    return await this.repository.findAll();
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}