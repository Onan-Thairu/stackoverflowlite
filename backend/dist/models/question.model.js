"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor(id, title, description, tried, created_at, user_id) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tried = tried;
        this.created_at = created_at;
        this.user_id = user_id;
    }
}
exports.Question = Question;
exports.default = Question;
