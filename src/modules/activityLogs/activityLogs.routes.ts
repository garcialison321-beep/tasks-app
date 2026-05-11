import { Router } from "express";
import { ActivityLogsController } from "./activityLogs.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const controller =
  new ActivityLogsController();

router.post(
  "/",
  authMiddleware,
  controller.create
);

router.get(
  "/",
  authMiddleware,
  controller.findAll
);

router.get(
  "/me",
  authMiddleware,
  controller.findMine
);

export default router;