export class Answer {
  constructor(
    public id: string,
    public description: string,
    public question_id: string,
    public user_id: string,
    public created_at: string,
    public isAccepted: string,
    public accepted_email_sent: string
  ){}
}

export default Answer