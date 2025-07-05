// import {
//   Column,
//   ManyToOne,
//   JoinColumn,
//   Entity,
//   CreateDateColumn,
//   PrimaryGeneratedColumn
// } from "typeorm";
// import  { User } from "./User.js";
// import { UserPosts } from "./Post.js";
//
// @Entity()
// export class CommentPost {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;
//
//   @Column()
//   comment: string;
//
//   @CreateDateColumn()
//   comment_date: Date;
//
//   @Column({ nullable: true })
//   postId: string;
//
//   @ManyToOne(() => UserPosts, (post) => post.comments, {
//     onDelete: 'CASCADE',
//   })
//   @JoinColumn({ name: 'postId' })
//   post: UserPosts;
//
//   @Column({ default: false })
//   isLiked: boolean;
//
//   @Column({ nullable: true })
//   userId: string;
//
//   @ManyToOne(() => User, (user) => user.comments, {
//     onDelete: 'CASCADE',
//   })
//   @JoinColumn({ name: 'userId' })
//   user: User;
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, ManyToOne, JoinColumn, Entity, CreateDateColumn, PrimaryGeneratedColumn, } from 'typeorm';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let CommentPost = class CommentPost {
    id;
    comment;
    comment_date;
    postId;
    post;
    isLiked;
    userId;
    user;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], CommentPost.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], CommentPost.prototype, "comment", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], CommentPost.prototype, "comment_date", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], CommentPost.prototype, "postId", void 0);
__decorate([
    ManyToOne(() => require('./Post.js').UserPosts, (post) => post.comments, {
        onDelete: 'CASCADE',
    }),
    JoinColumn({ name: 'postId' }),
    __metadata("design:type", Function)
], CommentPost.prototype, "post", void 0);
__decorate([
    Column({ default: false }),
    __metadata("design:type", Boolean)
], CommentPost.prototype, "isLiked", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], CommentPost.prototype, "userId", void 0);
__decorate([
    ManyToOne(() => require('./User.js').User, (user) => user.comments, {
        onDelete: 'CASCADE',
    }),
    JoinColumn({ name: 'userId' }),
    __metadata("design:type", Function)
], CommentPost.prototype, "user", void 0);
CommentPost = __decorate([
    Entity()
], CommentPost);
export { CommentPost };
//# sourceMappingURL=Comment.js.map