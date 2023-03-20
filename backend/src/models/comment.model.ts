export class Comment {
  constructor(
    public id: string,
    public description: string,
    public answer_id: string,
    public user_id: string,
    public created_at: string
  ){}
}

export default Comment