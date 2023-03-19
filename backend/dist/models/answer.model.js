"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
class Answer {
    constructor(id, description, question_id, user_id, created_at, isAccepted) {
        this.id = id;
        this.description = description;
        this.question_id = question_id;
        this.user_id = user_id;
        this.created_at = created_at;
        this.isAccepted = isAccepted;
    }
}
exports.Answer = Answer;
exports.default = Answer;
