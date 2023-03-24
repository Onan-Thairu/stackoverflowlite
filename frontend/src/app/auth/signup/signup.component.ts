import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { register } from 'src/app/state/actions/register.actions';
import { selectRegisterUserStateError, selectRegisterUserStateloading } from 'src/app/state/selectors/register.selectors';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup
  isLoading = true

  constructor(private fb:FormBuilder, private store: Store<AppState>, private userService:UserService, private router:Router, private auth: AuthService){}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, Validators.required ],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirm_password: [null, [Validators.required, this.passwordMatchValidator]]
    })
  }

  // submitForm() {
  //   const { username, email, password } = this.form.value
  //   const formData:User = { username, email, password }
  //   this.userService.register(formData).subscribe(response => {
  //     console.log(response)
  //     this.auth.register()
  //     localStorage.setItem('token', response.token)
  //   })
  // }
  submitForm() {
    const { username, email, password } = this.form.value
    const formData: User = { username, email, password }
    this.store.dispatch(register({ user: formData}))

    this.store.select(selectRegisterUserStateloading).subscribe((loading) => {
      this.isLoading = loading
    })

    this.store.select(selectRegisterUserStateError).subscribe((error) => {
      if (error) {
        console.log(error.message);
        return
      }
    })
    this.router.navigate(["/"])
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
