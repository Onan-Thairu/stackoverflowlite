import { Request, Response, RequestHandler } from 'express'
import Question from '../models/question.model'
import { v4 as uuid } from 'uuid'
import { validateQuestion } from '../helpers/question.validate'
import DB from '../dbHelper/dbConnection'

export const addQuestion: RequestHandler = async (req: Request, res: Response) => {
  try {
    const question: Question = {
      id: uuid() as string,
      title: req.body.title as string,
      description: req.body.description as string,
      tried: req.body.tried as string,
      user_id: req.body.user_id as string
    }

    const { error } = validateQuestion(question)
    if (error) return res.status(400).send(error.details[0].message)

    if (DB.checkConnection() as unknown as boolean) {
      const savedQuestion = await DB.exec("sp_CreateQuestion", { ...question })
      if (savedQuestion) {
        res.status(201).send(savedQuestion)
      } else {
        res.status(422).send({ message: "Error creating question" })
      }
    } else {
      res.status(500).send({ message: "Error connecting to database" })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}