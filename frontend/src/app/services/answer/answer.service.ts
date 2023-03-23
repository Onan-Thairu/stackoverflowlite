import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Answer } from "src/app/state/models/answer.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  constructor(private http: HttpClient) {}

  getAnswers(): Observable<Answer[]>{
    return this.http.get<Answer[]>('http://localhost:4000/api/answers')
  }
}