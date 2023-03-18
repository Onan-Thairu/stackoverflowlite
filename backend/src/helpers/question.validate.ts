import Question from "../models/question.model";
import joi from "joi"

const questionSchema = joi.object({
  id: joi.string().required(),
  title: joi.string().required(),
  description: joi.string().required(),
  tried: joi.string().required(),
  user_id: joi.string().required()
})

export const validateQuestion = (question: Question) => {
  return questionSchema.validate(question)
}