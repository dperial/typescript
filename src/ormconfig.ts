import { join } from "path";
import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";
import { TodoEntity } from "./database/entity/todo.entity";
import { UserEntity } from "./database/entity/user.entity";
import { UserInfoEntity } from "./database/entity/user_info.entity";

dotenv.config();
const connectionOptions: ConnectionOptions= {
    /* ssl: { rejectUnauthorized: false}, */
    type: "postgres",
    host: process.env.Host || "localhost",
    port: 5432,
    username: process.env.User || "postgres",
    password: "postgres", // process.env.DB_Password ||
    database: process.env.Database || "postgres",
    synchronize: !process.env.DB_NO_SYNC,
    logging: !process.env.DB_NO_LOGS,
    entities: [TodoEntity, UserEntity, UserInfoEntity],
    dropSchema: false,
    logger: "debug",
    migrations: [join(__dirname, "src/migration/**/*.ts")],
};
export = connectionOptions;