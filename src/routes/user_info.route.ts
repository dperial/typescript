import { Router } from "express";
import { UserInfoController } from "../controllers/user_info.controller";

const userInfoRouter = Router();

//! @Post
userInfoRouter.post("/adduserinfo", UserInfoController.addUserInfo);

export{userInfoRouter};