import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
import TasksRouter from "../../modules/tasks/tasks.routes";
import TagsRouter from "../../modules/tags/tags.routes";
import AttachmentsRouter from "../../modules/attachments/attachments.routes";
import NotificationsRouter from "../../modules/notifications/notifications.routes";
import ActivityLogsRouter from "../../modules/activityLogs/activityLogs.routes";

const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/tasks', TasksRouter);
router.use("/tags", TagsRouter);
router.use("/attachments", AttachmentsRouter);
router.use("/notifications", NotificationsRouter);
router.use("/activity-logs",ActivityLogsRouter);

export default router;