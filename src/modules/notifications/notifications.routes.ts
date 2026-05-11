import { Router } from "express";
import { NotificationsController } from "./notifications.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const controller = new NotificationsController();

router.post(
  "/",
  authMiddleware,
  controller.create
);

router.get(
  "/me",
  authMiddleware,
  controller.findMine
);

router.patch(
  "/:id/read",
  authMiddleware,
  controller.markAsRead
);

router.delete(
  "/:id",
  authMiddleware,
  controller.delete
);

export default router;