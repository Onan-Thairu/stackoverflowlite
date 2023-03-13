import { Question } from "./models/question.model";
import { Answer } from "./models/answer.model";
import { Comment } from "./models/comment.model";

export interface AppState {
  questions: Question[]
  answers: Answer[]
  comments: Comment[]
}