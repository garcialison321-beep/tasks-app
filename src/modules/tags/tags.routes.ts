import { Router } from "express";
import { TagsController } from "./tags.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const controller = new TagsController();

router.post("/", authMiddleware, controller.create);
router.get("/", authMiddleware, controller.findAll);
router.delete("/:id", authMiddleware, controller.delete);

export default router;