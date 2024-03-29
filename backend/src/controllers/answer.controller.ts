import { Request, Response, RequestHandler } from 'express'
import Answer from '../models/answer.model'
import { v4 as uuid } from 'uuid'
import { validateAnswer } from '../helpers/answer.validate'
import DB from '../dbHelper/dbConnection'


// Get answers to a question
export const getQuestionAnswers: RequestHandler = async (req: Request, res: Response) => {
  try {
    if (DB.checkConnection() as unknown as boolean) {
      const question_id = req.params.question_id

      const answers: Answer[] = await DB.exec("sp_GetAnswersByQuestion", { question_id }) as unknown as Answer[]

      if (answers) {
        if (answers.length > 0) {
          res.status(200).json(answers)
        } else {
          res.status(200).json({ message: "No answers found!" })
        }
      } else {
        res.status(500).json({ message: "Error getting answers" })
      }
    } else {
      res.status(500).json({ message: "Error connecting to database" })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

// Add an answer
export const addAnswer: RequestHandler = async (req: Request, res: Response) => {
  try {
    const answer: Answer = {
      id: uuid() as string,
      description: req.body.description as string,
      question_id: req.body.question_id as string,
      created_at: new Date().toLocaleDateString(),
      user_id: req.body.user_id as string,
      isAccepted: '0',
      accepted_email_sent: '0'
    }

    const { error } = validateAnswer(answer)
    if (error) return res.status(400).send(error.details[0].message)

    if (DB.checkConnection() as unknown as boolean) {
      const savedAnswer = await DB.exec("sp_CreateAnswer", { ...answer })
      if (savedAnswer) {
        res.status(201).send(savedAnswer)
      } else {
        res.status(422).send({ message: "Error creating answer" })
      }
    } else {
      res.status(500).send({ message: "Error connecting to database" })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

// Update an answer
export const updateAnswer: RequestHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.answer_id
    const answerToUpdate = await DB.exec("sp_GetAnswerById", { id })    

    if (answerToUpdate) {
      if (answerToUpdate.length > 0) {
        const updatedAnswer: Answer = {...answerToUpdate[0], ...req.body, created_at: new Date().toLocaleDateString()}

        const { error } = validateAnswer(updatedAnswer)
        if (error) return res.status(400).json({ message: error.details[0].message })

        if (DB.checkConnection() as unknown as boolean) {
          const updated: Answer = await DB.exec("sp_UpdateAnswer", {
            id: updatedAnswer.id,
            description: updatedAnswer.description,
            created_at: updatedAnswer.created_at,
            isAccepted: updatedAnswer.isAccepted,

          }) as unknown as Answer

          if (updated) {
            res.status(200).json(updated)
          } else {
            res.status(500).json({ message: "Error updating answer" })
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

// Delete an answer
export const deleteAnswer: RequestHandler = async (req: Request, res: Response) => {
  try {
      const id = req.params.id;
      if (DB.checkConnection() as unknown as boolean) {
          const result = await DB.exec("sp_DeleteAnswer", { id })
          if (result && result[0].success) {
              res.status(200).json({message: "Answer Deleted"});
          } else {
              res.status(200).json({message: "Answer not found"});
          }
      } else {
        res.status(500).json({message: "Error connecting to database"});
      }
  } catch (error) {
    res.status(500).json(error);
  }
}

