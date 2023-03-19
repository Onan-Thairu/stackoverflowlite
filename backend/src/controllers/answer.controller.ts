import { Request, Response, RequestHandler } from 'express'
import Answer from '../models/answer.model'
import { v4 as uuid } from 'uuid'
import { validateAnswer } from '../helpers/answer.validate'
import DB from '../dbHelper/dbConnection'


// Add a question
export const addAnswer: RequestHandler = async (req: Request, res: Response) => {
  try {
    const answer: Answer = {
      id: uuid() as string,
      description: req.body.description as string,
      question_id: req.body.question_id as string,
      created_at: new Date().toLocaleDateString(),
      user_id: req.body.user_id as string,
      isAccepted: req.body.isAccepted as string
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