import { Router } from "express";
import { TasksController } from "./tasks.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const controller = new TasksController();

router.post("/", authMiddleware, controller.create);
router.get("/", authMiddleware, controller.findAll);
router.delete("/:id", authMiddleware, controller.delete);

export default router;