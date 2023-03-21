import mssql from 'mssql'
import sendMail from '../helper/transporter.helper'
import ejs from 'ejs'
import path from 'path'
import dotenv from 'dotenv'
import sqlConfig from '../config/dbConfig'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

export const sendAnswerAcceptedEmail =async () => {
  try {
    const pool = await mssql.connect(sqlConfig)
    const acceptedAnswers = await pool.request().query(`SELECT * FROM Answers WHERE isAccepted = 1 AND accepted_email_sent = 0`)
    const acceptedAnswerslist = acceptedAnswers.recordset

    for (let i = 0; i < acceptedAnswerslist.length; i++) {
      let URL = `https://www.thereisaiaboutit.com`
      const user_id = acceptedAnswerslist[i].user_id
      const usersAnswerAccepted = await pool.request().query(`SELECT * FROM Users WHERE id='${user_id}'`)
      const usersAnswerAcceptedList = usersAnswerAccepted.recordset

      ejs.renderFile(path.resolve(__dirname, '../templates/acceptedAnswerEmail.ejs'), { name: usersAnswerAcceptedList[0].username, URL:URL }, async (error, data) => {
        if (error) {
          console.log(error);
        } else {
          let mailOptions = {
            from: process.env.EMAIL,
            to: usersAnswerAcceptedList[0].email,
            subject: 'Congratulations!',
            html: data
          }
          await sendMail(mailOptions)
          await pool.request().query(`UPDATE Answers SET accepted_email_sent = 1 WHERE id='${acceptedAnswerslist[i].id}'`)
        }
      })
    }

  } catch (error) {
    console.log(error);
  }
}