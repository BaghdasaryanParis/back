import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User.js";
import { UserPosts } from "./entity/Post.js";
import { CommentPost } from "./entity/Comment.js";
import { FriendRequest } from "./entity/FriendRequest.js";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: [User, UserPosts, CommentPost, FriendRequest],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map