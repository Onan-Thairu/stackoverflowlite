import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { selectAllQuestions } from '../state/selectors/question.selectors';
import { Store } from '@ngrx/store';
import { loadQuestions } from '../state/actions/question.actions';
import { Question } from '../state/models/question.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allQuestions: Question[] = []

  constructor(private store: Store) {}

  ngOnInit() {
   
    this.store.dispatch(loadQuestions())
    

    this.store.select(selectAllQuestions).subscribe(questions => {
      this.allQuestions = questions as Question[]
      console.log(this.allQuestions)
    })
  }
}
