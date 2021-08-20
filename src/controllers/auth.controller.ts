import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
import dotenv from "dotenv";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../database/repository/user.repository";

dotenv.config();

export class AuthController{

    static validateemail(user_email : string ) : boolean {
        let isValidated: boolean = EmailValidator.validate(user_email);

        return isValidated;
    }
    static decodeJwt(req: Request, res : Response) {
        let token = "" + req.headers.authorization;
        let jwt_key = "" + process.env.JWT_SECRET_KEY;

        return jwt.verify(token, jwt_key, async(error: any, data: any) => {

            if (error) {
                console.log(error);
                return res.send({
                    code: 402,
                    message: error,
                });

            }else {
                return res.send({
                    code: 200,
                    message: data,
                });
            }
        });
    }
    static createJwt(req: Request, res: Response) {

        let { user_email, user_password} = req.body;
        let jwt_key = "" + process.env.JWT_SECRET_KEY; // "" + process.env.JWT_SECRET_KEY as string;

        console.log(jwt_key);

        if(!AuthController.validateemail(user_email)) {

            return res.send({
                code: 401,
                message: "Invalid email, please try again!!"
            })
        }else {
            jwt.sign({
                user_email : user_email, //! payload

            },
            jwt_key ,//! secret key
            {
                expiresIn: "2h",//! Optional => Time after which jwt expires
            },
            async (error: any, jwtData: any) => {
                if(error) {
                    console.log(error);

                    return res.send({
                        code: 402,
                        message: "Something went wrong!!"
                    });
                }else {
                    let userRepository = getCustomRepository(UserRepository); //! Saving users in DB
                    await userRepository.addedUsers(req, res);

                    return res.send({
                        code: 401,
                        message: jwtData,
                    })
                }
            }
            )
        }
    }
}