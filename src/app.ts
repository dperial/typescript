import http, { request } from "http";
import express from "express";
import {Request, Response} from "express";
import { baseRouter } from "./routes/base.routes";
import { userRouter } from "./routes/user.routes";

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

const app = express();
const port = 8008;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.set("port", port);

app.use("/", baseRouter);
app.use("/", userRouter );
/* app.get("/home", (req: Request, res: Response) =>{
    res.json({
        name: "Learn Backend for App developement as a profi !",
    });
}); */

app.listen(app.get("port"), ()=> {
    console.log(`Server is rocking over ${app.get("port")}`);

})