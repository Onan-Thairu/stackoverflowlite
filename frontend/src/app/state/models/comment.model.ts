export interface Comment {
  id: number;
  body: string;
  author: string;
  created_at: Date;
  answer_id: number;
}
