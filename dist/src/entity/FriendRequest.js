// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   ManyToOne,
// } from 'typeorm';
// import { User } from './User.js';
//
// export type FriendRequestStatus = 'pending' | 'accepted' | 'declined';
//
// @Entity()
// export class FriendRequest {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;
//
//   @ManyToOne(() => User, (user) => user.sentRequests, { onDelete: 'CASCADE' })
//   sender: User;
//
//   @ManyToOne(() => User, (user) => user.receivedRequests, { onDelete: 'CASCADE' })
//   receiver: User;
//
//   @Column({ type: 'enum', enum: ['pending', 'accepted', 'declined'], default: 'pending' })
//   status: FriendRequestStatus;
//
//   @CreateDateColumn()
//   createdAt: Date;
//
//   @UpdateDateColumn()
//   updatedAt: Date;
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
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, } from 'typeorm';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let FriendRequest = class FriendRequest {
    id;
    sender;
    receiver;
    status;
    createdAt;
    updatedAt;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], FriendRequest.prototype, "id", void 0);
__decorate([
    ManyToOne(() => require('./User.js').User, (user) => user.sentRequests, { onDelete: 'CASCADE' }),
    __metadata("design:type", Function)
], FriendRequest.prototype, "sender", void 0);
__decorate([
    ManyToOne(() => require('./User.js').User, (user) => user.receivedRequests, { onDelete: 'CASCADE' }),
    __metadata("design:type", Function)
], FriendRequest.prototype, "receiver", void 0);
__decorate([
    Column({
        type: 'enum',
        enum: ['pending', 'accepted', 'declined'],
        default: 'pending',
    }),
    __metadata("design:type", String)
], FriendRequest.prototype, "status", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], FriendRequest.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], FriendRequest.prototype, "updatedAt", void 0);
FriendRequest = __decorate([
    Entity()
], FriendRequest);
export { FriendRequest };
//# sourceMappingURL=FriendRequest.js.map