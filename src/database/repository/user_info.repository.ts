import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { UserInfoEntity } from "../entity/user_info.entity";
import {Request, Response} from "express";
import { UserRepository } from "./user.repository";

@EntityRepository(UserInfoEntity)

export class UserInfoRepository extends Repository<UserInfoEntity>{

    async addUserInfo(req: Request, res: Response) {

        let userRepository = getCustomRepository(UserRepository);
        let  { user_email, user_phonenumber, user_adress} = req.body;

        let user = await userRepository.findOne({user_email: user_email});

        if(user != undefined) {
            let userInfoEntity = new UserInfoEntity();

            userInfoEntity.user = user;
            userInfoEntity.user_phonenumber = user_phonenumber;
            userInfoEntity.user_adress = user_adress;

            await userInfoEntity.save().then((data: any) => {
                return res.send({
                    code: 200,
                    data
                })
            }).catch((error: any) => {
                return res.send({
                    code: 401,
                    data: error
                })
            })

        }

    }
}