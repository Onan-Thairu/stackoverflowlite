"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerRouter = void 0;
const express_1 = require("express");
const answer_controller_1 = require("../controllers/answer.controller");
exports.answerRouter = (0, express_1.Router)();
exports.answerRouter.get("/:question_id", answer_controller_1.getQuestionAnswers);
exports.answerRouter.post("/add-answer", answer_controller_1.addAnswer);
