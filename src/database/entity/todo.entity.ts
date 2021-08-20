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

//! Relations PG
/*
1. 1 to 1
2. Many to 1
3. 1 to Many
4. Many to Many
*/
