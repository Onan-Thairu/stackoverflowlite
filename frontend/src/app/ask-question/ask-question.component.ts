import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  form!: FormGroup
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      details: [null, [Validators.required, Validators.minLength(20)]],
      tried: [null, [Validators.required, Validators.minLength(20)]]
    })
  }

  submitForm(){}

}
