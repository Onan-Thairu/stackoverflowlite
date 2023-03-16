import express, { Express } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const app: Express = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5051
app.listen( () => {
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