import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { Question } from '../state/models/question.model';
import { Answer } from '../state/models/answer.model';
import { Comment } from '../state/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = `environment.apiUrl/questions`;

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}`);
  }

  getQuestion(id: string): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/${id}`);
  }

  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.apiUrl}`, question);
  }

  updateQuestion(question: Question): Observable<Question> {
    return this.http.put<Question>(`${this.apiUrl}/${question.id}`, question);
  }

  deleteQuestion(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getQuestionAnswers(questionId: string): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.apiUrl}/${questionId}/answers`);
  }

  createAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(`${this.apiUrl}/${answer.question_id}/answers`, answer);
  }

  updateAnswer(answer: Answer): Observable<Answer> {
    return this.http.put<Answer>(`${this.apiUrl}/${answer.question_id}/answers/${answer.id}`, answer);
  }

  deleteAnswer(answer: Answer): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${answer.question_id}/answers/${answer.id}`);
  }

  getAnswerComments(answerId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/answers/${answerId}/comments`);
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}/answers/${comment.answer_id}/comments`, comment);
  }

  updateComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.apiUrl}/answers/${comment.answer_id}/comments/${comment.id}`, comment);
  }

  deleteComment(commentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/comments/${commentId}`);
  }
}
