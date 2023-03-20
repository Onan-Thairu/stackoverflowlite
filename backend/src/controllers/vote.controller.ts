import { Request, Response, RequestHandler } from 'express'
import Vote from '../models/vote.model'
import { v4 as uuid } from 'uuid'
import { validateVote } from '../helpers/vote.validate'
import DB from '../dbHelper/dbConnection'
import sqlConfig from '../config/db.config'
import mssql from 'mssql'

export const voteOnAnswer = async (req: Request, res: Response) => {
  try {
    if (DB.checkConnection() as unknown as boolean) {
      const vote: Vote = {
        id: uuid() as string,
        voteType: req.body.voteType as number,
        answer_id: req.body.answer_id as string,
        user_id: req.body.user_id as string
      }

      const { error } = validateVote(vote)
      if (error) return res.status(400).json(error.details[0].message)

      const pool = await mssql.connect(sqlConfig)
      await pool.request()
        .input('id', vote.id)
        .input('voteType', vote.voteType)
        .input('answer_id', vote.answer_id)
        .input('user_id', vote.user_id)
        .execute('sp_VoteOnAnswer')

      return res.status(201).json({ message: "Vote Added"})
    }

  } catch (error) {
    res.status(422).json(error)
  }
}
