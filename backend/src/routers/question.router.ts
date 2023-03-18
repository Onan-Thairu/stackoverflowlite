import { Router } from "express";
import { addQuestion, getAllQuestions } from "../controllers/question.controller";

const questionRouter = Router()

questionRouter.get("", getAllQuestions)
questionRouter.post("/add-question", addQuestion)

export default questionRouter