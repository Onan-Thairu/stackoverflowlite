export class Question {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public tried: string,
    public user_id: string
  ){}
}

export default Question