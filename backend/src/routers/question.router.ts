import { Router } from "express";
import { addQuestion, deleteQuestion, getAllQuestions, getQuestionById, updateQuestion } from "../controllers/question.controller";
import { verifyToken } from "../middleware/verifyToken.middleware";

const questionRouter = Router()

questionRouter.get("", getAllQuestions)
questionRouter.get("/:id", verifyToken, getQuestionById)
questionRouter.post("/add-question", verifyToken, addQuestion)
questionRouter.put("/:id", verifyToken, updateQuestion)
questionRouter.delete("/:id", verifyToken, deleteQuestion)

export default questionRouter