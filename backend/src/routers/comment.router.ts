import { Router } from "express";
import { addComment, getAnswerComments } from "../controllers/comment.controller";

export const commentRouter = Router()

commentRouter.get("/:answer_id", getAnswerComments)
commentRouter.post("/add-comment", addComment)

