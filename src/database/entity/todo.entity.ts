import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("todos")
export class TodoEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    todo_id !: string;

    @Column({
        nullable : false
    })

    todo_title !: string;
    @Column({
        nullable : false
    })

    todo_description !: string;

}

