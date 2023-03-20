import { Router } from "express";
import { addAnswer, deleteAnswer, getQuestionAnswers, updateAnswer } from "../controllers/answer.controller";

export const answerRouter = Router()

answerRouter.get("/:question_id", getQuestionAnswers)
answerRouter.post("/add-answer", addAnswer)
answerRouter.put("/:answer_id", updateAnswer)
answerRouter.delete("/:id", deleteAnswer)