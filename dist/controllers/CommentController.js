var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { JsonController, Body, Param, Delete, Post, Patch, ForbiddenError, CurrentUser, HttpCode, HttpError } from "routing-controllers";
import { AppDataSource } from "../src/data-source.js";
import { User } from "../src/entity/User.js";
import { UserPosts } from "../src/entity/Post.js";
import { CommentPost } from "../src/entity/Comment.js";
let CommentController = class CommentController {
    userRepo = AppDataSource.getRepository(User);
    postRepo = AppDataSource.getRepository(UserPosts);
    commentRepo = AppDataSource.getRepository(CommentPost);
    async createComment(user, body) {
        const userComment = await this.userRepo.findOne({ where: { id: user.id } });
        const post = await this.postRepo.findOne({ where: { id: body.postId } });
        const comment = new CommentPost();
        comment.comment = body.comment;
        comment.isLiked = false;
        comment.post = post;
        comment.user = userComment;
        return await this.commentRepo.save(comment);
    }
    async deleteComment(user, comment_id) {
        const comment = await this.commentRepo.findOne({
            where: { id: comment_id },
            relations: ['user'],
        });
        if (!comment)
            throw new HttpError(404, 'Comment not found');
        if (comment.user.id !== user.id)
            throw new ForbiddenError('You are not allowed to delete this comment');
        await this.commentRepo.remove(comment);
        return { message: 'Comment deleted' };
    }
    async updateComment(user, comment_id, body) {
        const comment = await this.commentRepo.findOne({
            where: { id: comment_id },
            relations: ['user'],
        });
        if (comment.user.id !== user.id)
            throw new ForbiddenError('You are not allowed to update this comment');
        if (body.comment !== undefined) {
            comment.comment = body.comment;
        }
        return await this.commentRepo.save(comment);
    }
};
__decorate([
    Post('/'),
    HttpCode(201),
    __param(0, CurrentUser()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createComment", null);
__decorate([
    Delete('/:comment_id'),
    HttpCode(204),
    __param(0, CurrentUser()),
    __param(1, Param('comment_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "deleteComment", null);
__decorate([
    Patch('/:comment_id'),
    __param(0, CurrentUser()),
    __param(1, Param('comment_id')),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User, String, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "updateComment", null);
CommentController = __decorate([
    JsonController('/comments')
], CommentController);
export { CommentController };
//# sourceMappingURL=CommentController.js.map