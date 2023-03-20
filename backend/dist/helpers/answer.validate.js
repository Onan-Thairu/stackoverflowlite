"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAnswer = void 0;
const joi_1 = __importDefault(require("joi"));
const answerSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    question_id: joi_1.default.string().required(),
    user_id: joi_1.default.string().required(),
    created_at: joi_1.default.string().required(),
    isAccepted: joi_1.default.required()
});
const validateAnswer = (answer) => {
    return answerSchema.validate(answer);
};
exports.validateAnswer = validateAnswer;
