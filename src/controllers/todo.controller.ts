import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { TodoRepository } from "../database/repository/todo.repository";

export class TodoController {

    static async createTodo(req: Request, res: Response) {
        let todoRepository = getCustomRepository(TodoRepository);

        await todoRepository.createTodo(req, res);
    }

    static async fetchTodos(req: Request, res: Response) {
        let todoRepository = getCustomRepository(TodoRepository);

        await todoRepository.fetchTodos(req, res);
    }

    static async fetchTodoById(req: Request, res: Response) {
        let todoRepository = getCustomRepository(TodoRepository);

        await todoRepository.fetchTodoById(req, res);
    }
}