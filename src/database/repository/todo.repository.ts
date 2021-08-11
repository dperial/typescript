import { EntityRepository, Repository } from "typeorm";
import { TodoEntity } from "../entity/todo.entity";
import {Request, Response} from "express";

@EntityRepository(TodoEntity)

export class TodoRepository extends Repository<TodoEntity>{

    async createTodo(req: Request, res: Response) {

        let  { todo_title, todo_description} = req.body;

        try {
            let addedTodo = await this.createQueryBuilder("todos").insert().values({
                todo_title: todo_title,
                todo_description: todo_description
            })
            .execute();

            if(addedTodo !== undefined) {
                return res.send({
                    code: 201,
                    isCreated: true,
                    message: "Todo is created",
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
    async fetchTodos(req: Request, res: Response) {
        try {
            let todos = await this.createQueryBuilder("todos").getMany();
            if(todos !== undefined) {
                return res.send({
                    code:200,
                    received: true,
                    todos,
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
    async fetchTodoById(req: Request, res: Response) {
        let { todo_id } = req.params;
        try {
            let todo = await this.createQueryBuilder("todos")
            .select()
            .where("todos.todo_id = :todo_id", { todo_id })
            .getOne();

            if(todo !== undefined) {
                return res.send({
                    code:200,
                    received: true,
                    todo,
                })
            }
            if (todo === undefined) {
                return res.send({
                    code:404,
                    received: false,
                    todo: "Todo not found!!",
                })
            }
        } catch (error) {
            console.log(error);

            return res.send({
                code: 401,
                received: false,
                message: "Your requested Todo doesn't exist!",
            });
        }
    }
}