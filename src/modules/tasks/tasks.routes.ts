import { Router } from "express";
import { TasksController } from "./tasks.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const _TasksController = new TasksController();


router.get("/", authMiddleware, (req, res) =>
  _TasksController.getTasks(req, res)
);

router.post("/", authMiddleware, (req, res) =>
  _TasksController.createTask(req, res)
);

export default router;