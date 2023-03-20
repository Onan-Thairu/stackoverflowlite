import { Router } from "express";
import { getTotalVotesOnAnswer, voteOnAnswer } from "../controllers/vote.controller";

export const voteRouter = Router()

voteRouter.post("/vote-on-answer", voteOnAnswer)
voteRouter.get("/:answer_id", getTotalVotesOnAnswer)