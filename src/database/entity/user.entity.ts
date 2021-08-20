import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserInfoEntity } from "./user_info.entity";

@Entity("users")

export class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  user_id!: string;

  @Column({
    nullable: false,
  })
  user_email!: string;

@Column({
  nullable: false,
})
user_password!: string;

@OneToOne(() => UserInfoEntity)
@JoinColumn()
user_info!: UserInfoEntity // Foreign key in users table
}