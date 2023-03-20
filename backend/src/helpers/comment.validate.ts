import Comment from "../models/comment.model"
import joi from "joi"

const commentSchema = joi.object({
  id: joi.string().required(),
  description: joi.string().required(),
  answer_id: joi.string().required(),
  user_id: joi.string().required(),
  created_at: joi.string().required(),
})

export const validateComment = (comment: Comment) => {
  return commentSchema.validate(comment)
}