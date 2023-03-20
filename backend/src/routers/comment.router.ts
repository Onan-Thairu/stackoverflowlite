import { Router } from "express";
import { addComment, deleteComment, getAnswerComments, updateComment } from "../controllers/comment.controller";

export const commentRouter = Router()

commentRouter.get("/:answer_id", getAnswerComments)
commentRouter.post("/add-comment", addComment)
commentRouter.put("/:comment_id", updateComment)
commentRouter.delete("/:id", deleteComment)
