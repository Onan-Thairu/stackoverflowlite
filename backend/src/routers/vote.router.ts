import { Router } from "express";
import { getTotalVotesOnAnswer, voteOnAnswer } from "../controllers/vote.controller";
import { verifyToken } from "../middleware/verifyToken.middleware";

export const voteRouter = Router()

voteRouter.post("/vote-on-answer", verifyToken, voteOnAnswer)
voteRouter.get("/:answer_id", verifyToken, getTotalVotesOnAnswer)