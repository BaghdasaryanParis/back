// import {
//     Entity,
//     PrimaryGeneratedColumn,
//     Column,
//     CreateDateColumn,
//     UpdateDateColumn,
//     OneToMany,
// } from 'typeorm';
// import { UserPosts } from './Post.js';
// import { CommentPost } from './Comment.js';
// import { FriendRequest } from './FriendRequest.js';
//
// @Entity()
// export class User {
//     @PrimaryGeneratedColumn('uuid')
//     id: string;
//
//     @Column({ unique: true })
//     email: string;
//
//     @Column()
//     username: string;
//
//     @Column()
//     password: string;
//
//     @CreateDateColumn()
//     createdAt: Date;
//
//     @UpdateDateColumn()
//     updatedAt: Date;
//
//     @OneToMany(() => FriendRequest, (request) => request.sender)
//     sentRequests: FriendRequest[];
//
//     @OneToMany(() => FriendRequest, (request) => request.receiver)
//     receivedRequests: FriendRequest[];
//
//     @OneToMany(() => UserPosts, (post) => post.user)
//     posts: UserPosts[];
//
//     @OneToMany(() => CommentPost, (comment) => comment.user)
//     comments: CommentPost[];
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
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, } from 'typeorm';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let User = class User {
    id;
    email;
    username;
    password;
    createdAt;
    updatedAt;
    sentRequests;
    receivedRequests;
    posts;
    comments;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    Column({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    OneToMany(() => require('./FriendRequest.js').FriendRequest, (request) => request.sender),
    __metadata("design:type", Array)
], User.prototype, "sentRequests", void 0);
__decorate([
    OneToMany(() => require('./FriendRequest.js').FriendRequest, (request) => request.receiver),
    __metadata("design:type", Array)
], User.prototype, "receivedRequests", void 0);
__decorate([
    OneToMany(() => require('./Post.js').UserPosts, (post) => post.user),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
__decorate([
    OneToMany(() => require('./Comment.js').CommentPost, (comment) => comment.user),
    __metadata("design:type", Array)
], User.prototype, "comments", void 0);
User = __decorate([
    Entity()
], User);
export { User };
//# sourceMappingURL=User.js.map