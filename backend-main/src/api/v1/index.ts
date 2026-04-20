import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
import TasksRouter from "../../modules/tasks/tasks.routes";

const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/tasks', TasksRouter);

export default router;