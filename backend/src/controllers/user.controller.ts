import { Request, Response } from 'express'
// import User from '../models/user.model'
import { v4 as uuid } from 'uuid'
import DB from '../dbHelper/dbConnection'
import path from 'path'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.model'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

interface ExtendedRequest extends Request {
  body: {
    username: string,
    email: string,
    password: string
  },
  params: {
    id: string
  }
}

export const registerUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const { username, email, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = {
      id: uuid() as string,
      username: username as string,
      email: email as string,
      password: hashedPassword
    }

    if (DB.checkConnection() as unknown as boolean) {
      const newUser = await DB.exec('sp_InsertOrUpdateUser', { id: user.id, username: user.username, email: user.email, password: user.password })

      if (newUser) {
        const token = jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn:'1d' })
        res.status(201).json({token})
      } else {
        res.status(422).json({ message: 'Error creating user'})
      }

    } else {
      res.status(500).json({ message: 'Error connecting to database'})
    }

  } catch (error) {
    res.status(500).json(error)
  }
}

// Log in User

export const loginUser = async (req: ExtendedRequest, res: Response) => {
  try {
    const { email, password } = req.body
    if (DB.checkConnection() as unknown as boolean) {
      const user = await DB.exec('sp_GetUserByEmail', { email: email })
      if (user.length > 0) {
        const validPassword = await bcrypt.compare(password, user[0].password)

        if (validPassword) {
          const token = jwt.sign(user[0], process.env.JWT_SECRET as string, { expiresIn:'1d' })
          res.status(201).json({ 'token':token, user: { id: user[0].id, username: user[0].username, email: user[0].email, isAdmin: user[0].isAdmin } })
        } else {
          res.status(500).json({ message:'Invalid password' })
        }
      } else {
        res.status(500).json({ message: 'Invalid email' })
      }
    } else {
      res.status(500).json({ message: 'Error connecting to database' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

// Get user
export const getUserById = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = req.params.id
    if (DB.checkConnection() as unknown as boolean) {
      const user: User[] = await DB.exec('sp_GetUserById', { id:id }) as unknown as User[]
      if (user) {
        res.status(200).json({ id:user[0].id, username:user[0].username, email:user[0].email, isAdmin:user[0].isAdmin })
      } else {
        res.status(404).json({ message: 'User found'})
      }
    } else {
      res.status(500).json({ message: 'Error connecting to database' })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}