import { Router } from "express";
import { addAnswer, getQuestionAnswers } from "../controllers/answer.controller";

export const answerRouter = Router()

answerRouter.get("/:question_id", getQuestionAnswers)
answerRouter.post("/add-answer", addAnswer )