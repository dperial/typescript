import http, { request } from "http";
import express from "express";
import {Request, Response} from "express";
import { todoRouter } from "./routes/todo.routes";
import { ConnectionOptions, createConnection } from "typeorm";
import  config  from "./ormconfig";
import "reflect-metadata";

//! NODE JS

//! Basic server

/* http.createServer((req, res) => {
    res.write("Hello Nodejs_Express");
    res.end();
}).listen(8080) */

//! server with header
/* http.createServer((req, res)=>{
    res.writeHead(200, {
        "Content-Type" : "text/html",
    });
    res.write("Hello once again in nodejs_expreee branch");
    res.end();
}).listen(8000); */

//! One more Server Read Strings(query)

/* http.createServer((req, res)=>{
    res.writeHead(200, {
        "Content-Type" : "text/html",
    });
    res.write(req.url);
    res.end();
}).listen(8000); */

//! Express Js Part

createConnection(config as ConnectionOptions).then( async (connection: { isConnected: any; }) => {

    if(connection.isConnected) {
        console.log("Postgres is conected");

    }
    const app = express();
    const port = 8000;

    app.use(express.json());
    app.use(express.urlencoded({ extended: false}));

    app.set("port", port);

    app.use("/todo", todoRouter);

    app.listen(app.get("port"), ()=> {
        console.log(`Server is rocking over ${app.get("port")}`);
    });
}).catch((error: any) => {
    console.log(error);

})


/* app.get("/home", (req: Request, res: Response) =>{
    res.json({
        name: "Learn Backend for App developement as a profi !",
    });
}); */



//! TYPEORM
// 1.Entity => Models than we create under flutter
// 2. Repository => Rapper Class for our Entity, where we create some method EX: CRUD operation
// 3.Controller => Classes which use our entire code of body, than will be perform some action
// 4.Routes=>
// 5.Ormconfig => Configuration file for our typeORM