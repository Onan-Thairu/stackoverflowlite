import express from "express";
import cors from 'cors'
// import path from "path";
// import dotenv from 'dotenv'
import { Request, Response } from "express";
import { sendWelcomeEmail } from "./service/welcomeEmail.service";
import cron from 'node-cron'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running...')
})

cron.schedule('*/10 * * * * *', async () => {
  await sendWelcomeEmail()
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  
})


