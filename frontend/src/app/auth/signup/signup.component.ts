import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup

  constructor(private fb:FormBuilder, private userService:UserService, private router:Router, private auth: AuthService){}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, Validators.required ],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirm_password: [null, [Validators.required, this.passwordMatchValidator]]
    })
  }

  submitForm() {
    const { username, email, password } = this.form.value
    const formData:User = { username, email, password }
    this.userService.register(formData).subscribe(response => {
      console.log(response)
      this.auth.register()
      localStorage.setItem('token', response.token)
    })
  }

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
