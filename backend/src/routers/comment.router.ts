import { Router } from "express";
import { addComment, deleteComment, getAnswerComments, updateComment } from "../controllers/comment.controller";
import { verifyToken } from "../middleware/verifyToken.middleware";

export const commentRouter = Router()

commentRouter.get("/:answer_id", verifyToken, getAnswerComments)
commentRouter.post("/add-comment", verifyToken, addComment)
commentRouter.put("/:comment_id", verifyToken, updateComment)
commentRouter.delete("/:id", verifyToken, deleteComment)
