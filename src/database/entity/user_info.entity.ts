import { userInfo } from "os";
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("user_info")

export class UserInfoEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  user_id!: string;

  @Column({
    nullable: false,
  })
  user_phonenumber!: string;

@Column({
  nullable: false,
})
user_adress!: string;

@OneToOne(() => UserEntity, (user) => user.user_info)
user!: UserEntity; // Foreign key in user_info Table
}