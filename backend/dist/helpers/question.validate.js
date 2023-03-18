"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuestion = void 0;
const joi_1 = __importDefault(require("joi"));
const questionSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    tried: joi_1.default.string().required(),
    user_id: joi_1.default.string().required()
});
const validateQuestion = (question) => {
    return questionSchema.validate(question);
};
exports.validateQuestion = validateQuestion;
