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
          res.status(200).json(questions)
        } else {
          res.status(200).json({ message: "No questions found" })
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

// Add a question
export const addQuestion: RequestHandler = async (req: Request, res: Response) => {
  try {
    const question: Question = {
      id: uuid() as string,
      title: req.body.title as string,
      description: req.body.description as string,
      tried: req.body.tried as string,
      created_at: new Date().toISOString(),
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

// Update a question
export const updateQuestion: RequestHandler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const questionToUpdate = await DB.exec("sp_GetQuestionById", { id })
    
    if (questionToUpdate) {
      if (questionToUpdate.length > 0) {
        const updatedQuestion: Question = {...questionToUpdate[0], ...req.body, created_at: new Date().toLocaleDateString()}
        
        const { error } = validateQuestion(updatedQuestion)
        if (error) return res.status(400).json({ message: error.details[0].message })

        if (DB.checkConnection() as unknown as boolean) {
          const updated: Question = await DB.exec("sp_UpdateQuestion", {
            id: updatedQuestion.id,
            title: updatedQuestion.title,
            description: updatedQuestion.description,
            tried: updatedQuestion.tried,
            created_at: updatedQuestion.created_at
          }) as unknown as Question

          if (updated) {
            res.status(200).json(updated)
          } else {
            res.status(500).json({ message: "Error updating question" })
          }
        } else {
          res.status(500).json({ message: "Error connecting to product" })
        }
      }
    }
  } catch (error) {
    res.status(500).json(error)
  }
}


// Delete a question
export const deleteQuestion: RequestHandler = async (req: Request, res: Response) => {
  try {
      const id = req.params.id;
      if (DB.checkConnection() as unknown as boolean) {
          const result = await DB.exec("sp_DeleteQuestion", { id })
          if (result && result[0].success) {
              res.status(200).json({message: "Question Deleted"});
          } else {
              res.status(200).json({message: "Question not found"});
          }
      } else {
        res.status(500).json({message: "Error connecting to database"});
      }
  } catch (error) {
    res.status(500).json(error);
  }
}

