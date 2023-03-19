import { Router } from "express";
import { addAnswer } from "../controllers/answer.controller";

export const answerRouter = Router()

answerRouter.post("/add-answer", addAnswer )