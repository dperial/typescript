import { Router } from "express";

const baseRouter = Router();

baseRouter.get("/home", (req, res)=> {
    res.send("Base home");
});

baseRouter.get("/user", (req, res)=> {
    res.send("Base User Page");
});

export {baseRouter};