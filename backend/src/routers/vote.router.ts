import { Router } from "express";
import { voteOnAnswer } from "../controllers/vote.controller";

export const voteRouter = Router()

voteRouter.post("/vote-on-answer", voteOnAnswer)