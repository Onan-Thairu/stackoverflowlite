import { Router } from "express";
import { addQuestion } from "../controllers/question.controller";

const questionRouter = Router()

questionRouter.post("/add-question", addQuestion)

export default questionRouter