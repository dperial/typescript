import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/greet", UserController.greetUser);
userRouter.get("/auth/", UserController.authenticateUser);

export {userRouter};