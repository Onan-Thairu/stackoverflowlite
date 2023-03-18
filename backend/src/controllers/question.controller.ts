import { Request, Response, RequestHandler } from 'express'
import Question from '../models/question.model'
import { v4 as uuid } from 'uuid'
import { validateQuestion } from '../helpers/question.validate'
import DB from '../dbHelper/dbConnection'

// Get all questions
export const getAllQuestions: RequestHandler = async (req: Request, res: Response) => {
  try {
    if (DB.checkConnection() as unknown as boolean) {
      const questions: Question[] = await DB.exec("sp_GetAllQuestions", {}) as unknown as Question[]

      if (questions) {
        if (questions.length > 0) {
          res.status(200).send(questions)
        } else {
          res.status(200).send("No questions found")
        }
      } else {
        res.status(500).send("Error getting products")
      }
    } else {
      res.status(500).send("Error connecting to database")
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

// Add a question
export const addQuestion: RequestHandler = async (req: Request, res: Response) => {
  try {
    const question: Question = {
      id: uuid() as string,
      title: req.body.title as string,
      description: req.body.description as string,
      tried: req.body.tried as string,
      created_at: new Date().toLocaleDateString(),
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

// Get question by id
export const getQuestionById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    if (DB.checkConnection() as unknown as boolean) {
      const question = await DB.exec("sp_GetQuestionById", { id })
      if (question) {
        if (question.length > 0) {
          res.status(200).send(question)
        } else {
          res.status(200).send("Question does not exist")
        }
      } else {
        res.status(500).send("Error getting question")
      }
    } else {
      res.status(500).send("Error connecting to database")
    }
  } catch (error) {
    res.status(500).send(error)
  }
}