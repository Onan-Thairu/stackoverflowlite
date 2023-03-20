"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
class Comment {
    constructor(id, description, answer_id, user_id, created_at) {
        this.id = id;
        this.description = description;
        this.answer_id = answer_id;
        this.user_id = user_id;
        this.created_at = created_at;
    }
}
exports.Comment = Comment;
exports.default = Comment;
