"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const question_controller_1 = require("../controllers/question.controller");
const questionRouter = (0, express_1.Router)();
questionRouter.get("", question_controller_1.getAllQuestions);
questionRouter.get("/:id", question_controller_1.getQuestionById);
questionRouter.post("/add-question", question_controller_1.addQuestion);
questionRouter.put("/:id", question_controller_1.updateQuestion);
questionRouter.delete("/:id", question_controller_1.deleteQuestion);
exports.default = questionRouter;
