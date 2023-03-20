"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateComment = void 0;
const joi_1 = __importDefault(require("joi"));
const commentSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    answer_id: joi_1.default.string().required(),
    user_id: joi_1.default.string().required(),
    created_at: joi_1.default.string().required(),
});
const validateComment = (comment) => {
    return commentSchema.validate(comment);
};
exports.validateComment = validateComment;
