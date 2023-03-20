import Vote from "../models/vote.model"
import joi from "joi"

const voteSchema = joi.object({
  id: joi.string().required(),
  voteType: joi.number().required(),
  user_id: joi.string().required(),
  answer_id: joi.string().required(),
})

export const validateVote = (vote: Vote) => {
  return voteSchema.validate(vote)
}