export class Vote {
  constructor(
    public id: string,
    public voteType: number,
    public answer_id: string,
    public user_id: string,
  ){}
}

export default Vote