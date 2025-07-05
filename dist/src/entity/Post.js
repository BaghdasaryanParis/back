// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToOne,
//   CreateDateColumn,
//   UpdateDateColumn,
//   JoinColumn,
//   OneToMany,
// } from 'typeorm';
//
// import type { User } from './User.js';
// import type { CommentPost } from './Comment.js';
//
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
//
// @Entity()
// export class UserPosts {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;
//
//   @Column()
//   post: string;
//
//   @Column({ nullable: true })
//   imageUrl: string;
//
//   @Column({ default: 0 })
//   likes: number;
//
//   @CreateDateColumn()
//   createdAt: Date;
//
//   @UpdateDateColumn()
//   updatedAt: Date;
//
//   @Column({ default: false })
//   isLiked: boolean;
//
//   @Column({ default: 0 })
//   likedCount: number;
//
//   @Column({ nullable: true })
//   userId: string;
//
//   @ManyToOne(
//       () => require('./User.js').User,
//       (user: User) => user.posts,
//       {
//         onDelete: 'CASCADE',
//       }
//   )
//   @JoinColumn({ name: 'userId' })
//   user: User;
//
//   @OneToMany(
//       () => require('./Comment.js').CommentPost,
//       (comment: CommentPost) => comment.post,
//       {
//         cascade: true,
//         onDelete: 'CASCADE',
//       }
//   )
//   comments: CommentPost[];
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
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany, } from 'typeorm';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let UserPosts = class UserPosts {
    id;
    post;
    imageUrl;
    likes;
    createdAt;
    updatedAt;
    isLiked;
    likedCount;
    userId;
    user;
    comments;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], UserPosts.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], UserPosts.prototype, "post", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], UserPosts.prototype, "imageUrl", void 0);
__decorate([
    Column({ default: 0 }),
    __metadata("design:type", Number)
], UserPosts.prototype, "likes", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], UserPosts.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], UserPosts.prototype, "updatedAt", void 0);
__decorate([
    Column({ default: false }),
    __metadata("design:type", Boolean)
], UserPosts.prototype, "isLiked", void 0);
__decorate([
    Column({ default: 0 }),
    __metadata("design:type", Number)
], UserPosts.prototype, "likedCount", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], UserPosts.prototype, "userId", void 0);
__decorate([
    ManyToOne(() => require('./User.js').User, (user) => user.posts, {
        onDelete: 'CASCADE',
    }),
    JoinColumn({ name: 'userId' }),
    __metadata("design:type", Function)
], UserPosts.prototype, "user", void 0);
__decorate([
    OneToMany(() => require('./Comment.js').CommentPost, (comment) => comment.post, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], UserPosts.prototype, "comments", void 0);
UserPosts = __decorate([
    Entity()
], UserPosts);
export { UserPosts };
//# sourceMappingURL=Post.js.map