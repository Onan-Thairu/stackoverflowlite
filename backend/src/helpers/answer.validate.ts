import Answer from "../models/answer.model";
import joi from "joi"

const answerSchema = joi.object({
  id: joi.string().required(),
  description: joi.string().required(),
  question_id: joi.string().required(),
  user_id: joi.string().required(),
  created_at: joi.string().required(),
  isAccepted: joi.required()
})

export const validateAnswer = (answer: Answer) => {
  return answerSchema.validate(answer)
}