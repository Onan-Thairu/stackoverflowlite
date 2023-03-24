import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectLoggedInUser } from '../state/selectors/login.selectors';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question/question.service';
import { addQuestion } from '../state/actions/question.actions';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  form!: FormGroup
  constructor(private fb:FormBuilder, private router: Router, private questionService: QuestionService, private store: Store<AppState>){}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      details: [null, [Validators.required, Validators.minLength(20)]],
      tried: [null, [Validators.required, Validators.minLength(20)]]
    })

    const user = this.store.select(selectLoggedInUser).subscribe((user: any) => {
      console.log(user?.user[0].id);
    })
  }

  submitForm(){
    this.store.dispatch(addQuestion(this.form.value))
    this.router.navigate(["/"])
  }

}
