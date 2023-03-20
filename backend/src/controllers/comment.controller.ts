import { Request, Response, RequestHandler } from 'express'
import Comment from '../models/comment.model'
import { v4 as uuid } from 'uuid'
import { validateComment } from '../helpers/comment.validate'
import DB from '../dbHelper/dbConnection'

// Add a comment
export const addComment: RequestHandler = async (req: Request, res: Response) => {
  try {
    const comment: Comment = {
      id: uuid() as string,
      description: req.body.description as string,
      answer_id: req.body.answer_id as string,
      created_at: new Date().toLocaleDateString(),
      user_id: req.body.user_id as string,
    }

    const { error } = validateComment(comment)
    if (error) return res.status(400).send(error.details[0].message)

    if (DB.checkConnection() as unknown as boolean) {
      const savedComment = await DB.exec("sp_CreateComment", { ...comment })
      if (savedComment) {
        res.status(201).send(savedComment)
      } else {
        res.status(422).send({ message: "Error creating comment" })
      }
    } else {
      res.status(500).send({ message: "Error connecting to database" })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}