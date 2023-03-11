import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl  } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required ],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirm_password: [null, [Validators.required, this.passwordMatchValidator]]
    })
  }

  submitForm() {}

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.root.get('password');
    const confirm_password = control.value;

    if (password && confirm_password && password.value !== confirm_password) {
      return { passwordMatch: true };
    } else {
      return null;
    }
  }
}
