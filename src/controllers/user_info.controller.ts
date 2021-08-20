import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserInfoRepository } from "../database/repository/user_info.repository";

export class UserInfoController {

    static async addUserInfo(req: Request, res: Response) {
        let userInfoRepository = getCustomRepository(UserInfoRepository);

        await userInfoRepository.addUserInfo(req, res);
    }
}