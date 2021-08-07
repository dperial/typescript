import {Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config;
export class UserController {
    static greetUser(req: Request, res: Response) {

        const userPass = process.env.BASEPASSWORD;
        let { username, useremail, userpassword } = req.body;
        let token = req.headers.authorization as string;

        if(username === "Dupont Perial" || token === userPass) {// It's suppose to be && not ||
            return res.send({
                userData: {
                    // We can write like this only if both paramter name are same!
                    "username": username,
                    "useremail": useremail,
                    "userpassword": userpassword
                 },
             });

        }else {
            return res.send({
                userData: "Invalid user !"
             });
        }
    }

    static authenticateUser(req: Request, res: Response) {
        const userPass = process.env.BASEPASSWORD;
        let token = req.headers.authorization as string;
        if(token === userPass) {
            return res.send( {
                authenticated: true,
                data: "You has looged successfuly",
            });
        }else {
            return res.send( {
                authenticated: false,
                data: "Enter a Valid Password",
            });
        }
    }
}