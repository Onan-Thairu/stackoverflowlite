"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerRouter = void 0;
const express_1 = require("express");
const answer_controller_1 = require("../controllers/answer.controller");
const verifyToken_middleware_1 = require("../middleware/verifyToken.middleware");
exports.answerRouter = (0, express_1.Router)();
exports.answerRouter.get("/:question_id", verifyToken_middleware_1.verifyToken, answer_controller_1.getQuestionAnswers);
exports.answerRouter.post("/add-answer", verifyToken_middleware_1.verifyToken, answer_controller_1.addAnswer);
exports.answerRouter.put("/:answer_id", verifyToken_middleware_1.verifyToken, answer_controller_1.updateAnswer);
exports.answerRouter.delete("/:id", verifyToken_middleware_1.verifyToken, answer_controller_1.deleteAnswer);
