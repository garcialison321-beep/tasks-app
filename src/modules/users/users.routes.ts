import { Router } from "express";
import { UsersController } from "./users.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();
const _UsersController = new UsersController();


router.get("/", authMiddleware, _UsersController.findAllUsers);


router.post("/register", _UsersController.register);

export default router;