import mssql from 'mssql'
import emailConfig from '../config/emailConfig'
import sendMail from '../helper/transporter.helper'
import ejs from 'ejs'
import path from 'path'
import dotenv from 'dotenv'
import sqlConfig from '../config/dbConfig'

dotenv.config({ path: path.resolve(__dirname, '../../.env')})

export const sendWelcomeEmail = async () => {
  try {
    const pool = await mssql.connect(sqlConfig)
    const users = await pool.request().query(`SELECT * FROM Users WHERE welcome_email_sent = 0`)
    const usersList = users.recordset
    
    
    for (let i = 0; i < usersList.length; i++) {
      let URL = `http://localhost:4000/verify/${usersList[i].id}`

      ejs.renderFile(path.resolve(__dirname, '../templates/welcomeEmail.ejs'), { name: usersList[i].username, URL:URL },async (error, data) => {
        
        
        if (error) {
          console.log(error);
        } else {
          let mailOptions = {
            from: process.env.EMAIL,
            to: usersList[i].email,
            subject: 'Welcome',
            html: data
          }
          await sendMail(mailOptions)
          await pool.request().query(`UPDATE Users SET welcome_email_sent = 1 WHERE id ='${usersList[i].id}'`)
        }
      })
      console.log(usersList[i].username)
    }
  } catch (error) {
    console.log(error);
  }
}