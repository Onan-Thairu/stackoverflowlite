import { Router } from "express";
import { addQuestion, getAllQuestions, getQuestionById } from "../controllers/question.controller";

const questionRouter = Router()

questionRouter.get("", getAllQuestions)
questionRouter.get("/:id", getQuestionById)
questionRouter.post("/add-question", addQuestion)

export default questionRouter