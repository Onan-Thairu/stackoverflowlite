import express, { Express } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

import userRouter from './routers/user.router'
import questionRouter from './routers/question.router'
import { answerRouter } from './routers/answer.router'
import { commentRouter } from './routers/comment.router'
import { voteRouter } from './routers/vote.router'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.use('/api/users', userRouter)
app.use('/api/questions', questionRouter)
app.use('/api/answers', answerRouter)
app.use('/api/comments', commentRouter)
app.use('/api/votes', voteRouter)

const PORT = process.env.PORT || 5052
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})


// async function testConnection() {
//   try {
//     const pool = await mssql.connect(sqlConfig)
//     const result = await pool.request().query('SELECT 1 as result')
//     console.log(result.recordset[0].result)
//   } catch (error) {
//     console.log(error)
//   }
// }

// testConnection()