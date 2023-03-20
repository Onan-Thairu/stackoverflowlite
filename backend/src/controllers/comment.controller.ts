import { Request, Response, RequestHandler } from 'express'
import Comment from '../models/comment.model'
import { v4 as uuid } from 'uuid'
import { validateComment } from '../helpers/comment.validate'
import DB from '../dbHelper/dbConnection'


export const getAnswerComments: RequestHandler = async (req: Request, res: Response) => {
  try {
    if (DB.checkConnection() as unknown as boolean) {
      const answer_id = req.params.answer_id

      const comments: Comment[] = await DB.exec("sp_GetCommentsByAnswer", { answer_id }) as unknown as Comment[]

      if (comments) {
        if (comments.length > 0) {
          res.status(200).json(comments)
        } else {
          res.status(200).json({ message: "No comments found!" })
        }
      } else {
        res.status(500).json({ message: "Error getting comments" })
      }
    } else {
      res.status(500).json({ message: "Error connecting to database" })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

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

// Update a comment
export const updateComment: RequestHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.comment_id
    const commentToUpdate = await DB.exec("sp_GetCommentById", { id })
    
    if (commentToUpdate) {
      if (commentToUpdate.length > 0) {
        const updatedComment: Comment = {...commentToUpdate[0], ...req.body, created_at: new Date().toLocaleDateString()}
        
        const { error } = validateComment(updatedComment)
        if (error) return res.status(400).json({ message: error.details[0].message })

        if (DB.checkConnection() as unknown as boolean) {
          const updated: Comment = await DB.exec("sp_UpdateComment", {
            id: updatedComment.id,
            description: updatedComment.description,
            created_at: updatedComment.created_at,
          }) as unknown as Comment

          if (updated) {
            res.status(200).json(updated)
          } else {
            res.status(500).json({ message: "Error updating comment" })
          }
        } else {
          res.status(500).json({ message: "Error connecting to database" })
        }
      }
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

// Delete a comment
export const deleteComment: RequestHandler = async (req: Request, res: Response) => {
  try {
      const id = req.params.id;
      if (DB.checkConnection() as unknown as boolean) {
          const result = await DB.exec("sp_DeleteComment", { id })
          if (result && result[0].success) {
              res.status(200).json({message: "Comment Deleted"});
          } else {
              res.status(200).json({message: "Comment not found"});
          }
      } else {
        res.status(500).json({message: "Error connecting to database"});
      }
  } catch (error) {
    res.status(500).json(error);
  }
}