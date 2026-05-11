import { ObjectId } from "mongodb";
import { ActivityLogsRepository } from "./activityLogs.repository";
import { ActivityLog } from "./activityLogs.model";
import { CreateActivityLogDto } from "./activityLogs.schema";

export class ActivityLogsService {

  private repository =
    new ActivityLogsRepository();

  async create(
    data: CreateActivityLogDto,
    userId: string
  ): Promise<ActivityLog> {

    const log: ActivityLog = {

      userId: new ObjectId(userId),

      action: data.action,

      entity: data.entity,

      entityId: new ObjectId(data.entityId),

      description: data.description,

      createdAt: new Date(),
    };

    return await this.repository.create(log);
  }

  async findAll() {

    return await this.repository.findAll();
  }

  async findByUser(userId: string) {

    return await this.repository.findByUser(userId);
  }
}