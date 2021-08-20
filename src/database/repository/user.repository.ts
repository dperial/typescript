import { EntityRepository, Repository } from "typeorm";
import {Request, Response} from "express";
import { UserEntity } from "../entity/user.entity";

@EntityRepository(UserEntity)

export class UserRepository extends Repository<UserEntity>{

    async addedUsers(req: Request, res: Response) {

        let  { user_email, user_password} = req.body;

        try {
            let addedUser = await this.createQueryBuilder("users").insert().values({
                user_email: user_email,
                user_password: user_password
            })
            .execute();

            if(addedUser !== undefined) {
                return res.send({
                    code: 201,
                    isCreated: true,
                    message: "User  has been successfully created",
                })
            }
        } catch (error) {
            console.log(error);

            return res.send({
                code: 401,
                isCreated: false,
                message: "Something went wrong",
            })
        }
    }
    async fetchUser(req: Request, res: Response) {
        try {
            let user = await this.createQueryBuilder("users").getMany();
            if(user !== undefined) {
                return res.send({
                    code:200,
                    received: true,
                    user,
                })
            }
        } catch (error) {
            return res.send({
                code: 401,
                received: false,
                message: "Todo is not exist!",
            });
        }
    }
    // Fetch Todo from a particular ID
    async fetchUserById(req: Request, res: Response) {
        let { user_id } = req.params;
        try {
            let user = await this.createQueryBuilder("users")
            .select()
            .where("todos.todo_id = :todo_id", { user_id })
            .getOne();

            if(user !== undefined) {
                return res.send({
                    code:200,
                    received: true,
                    user,
                })
            }
            if (user === undefined) {
                return res.send({
                    code:404,
                    received: false,
                    user: "User not found!!",
                })
            }
        } catch (error) {
            console.log(error);

            return res.send({
                code: 401,
                received: false,
                message: "User doesn't exist!",
            });
        }
    }
}