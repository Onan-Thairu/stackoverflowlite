import { Router } from "express";
import { addAnswer, deleteAnswer, getAllAnswers, getQuestionAnswers, updateAnswer } from "../controllers/answer.controller";
import { verifyToken } from "../middleware/verifyToken.middleware";

export const answerRouter = Router()

answerRouter.get("", getAllAnswers)
answerRouter.get("/:question_id", verifyToken, getQuestionAnswers)
answerRouter.post("/add-answer", verifyToken, addAnswer)
answerRouter.put("/:answer_id", verifyToken, updateAnswer)
answerRouter.delete("/:id", verifyToken, deleteAnswer)