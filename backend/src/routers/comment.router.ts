import { Router } from "express";
import { addComment } from "../controllers/comment.controller";

export const commentRouter = Router()

commentRouter.post("/add-comment", addComment)

