import { Router } from "express";
import { addQuestion, deleteQuestion, getAllQuestions, getQuestionById } from "../controllers/question.controller";

const questionRouter = Router()

questionRouter.get("", getAllQuestions)
questionRouter.get("/:id", getQuestionById)
questionRouter.post("/add-question", addQuestion)
questionRouter.delete("/:id", deleteQuestion)

export default questionRouter