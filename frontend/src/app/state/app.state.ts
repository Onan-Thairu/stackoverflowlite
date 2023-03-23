import { Question } from "./models/question.model";
import { Answer } from "./models/answer.model";
import { Comment } from "./models/comment.model";
import { QuestionState } from "./reducers/question.reducer";
import { AnswerState } from "./reducers/answer.reducer";
import { CommentState } from "./reducers/comment.reducer";

export interface AppState {
  questions: QuestionState
  answers: AnswerState
  comments: CommentState
}