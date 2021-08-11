import { Router } from "express";
import { TodoController } from "../controllers/todo.controller";

const todoRouter = Router();

//! @Post
todoRouter.post("/add", TodoController.createTodo);


//! @GET
todoRouter.get("/detail/:todo_id", TodoController.fetchTodoById);

//! Get
todoRouter.get("/", TodoController.fetchTodos);

export{todoRouter};