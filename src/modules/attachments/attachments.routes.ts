import { Router } from "express";
import { AttachmentsController } from "./attachments.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const controller = new AttachmentsController();

router.post("/", authMiddleware, controller.create);

router.get(
  "/task/:taskId",
  authMiddleware,
  controller.findByTask
);

router.delete(
  "/:id",
  authMiddleware,
  controller.delete
);

export default router;