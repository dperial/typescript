import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const authRouter = Router();

//! @Post
authRouter.post("/create", AuthController.createJwt);

//! @Get
authRouter.get("/decode", AuthController.decodeJwt);
export{authRouter};