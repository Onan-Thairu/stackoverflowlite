import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Question } from '../state/models/question.model';
import { Answer } from '../state/models/answer.model';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectAnswers } from '../state/selectors/answer.selectors';
import { loadAnswers } from '../state/actions/answer.actions';

@Component({
  selector: 'app-question-view',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent ],
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {
  question: Question | undefined

  answers: Answer[] = []

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.select('questions').subscribe(questions => {
        this.question = questions.questions.find((question: Question) => question.id === params['id'])
        console.log("Question", this.question);
      },
      (error:any) => {
        console.log(error); 
      })
    })
    
    this.store.dispatch(loadAnswers())

    this.route.params.subscribe(params => {
      this.store.select(selectAnswers).subscribe(answers => {
        this.answers = answers.filter((answer: Answer) => answer.question_id === params['id'])
        console.log("Answers:", this.answers);
        
      })
    })
  }
}
