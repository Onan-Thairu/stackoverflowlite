import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { logUser } from 'src/app/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { LoginService } from 'src/app/services/auth/login.service';
import { selectLoggedInUser, selectLoggedInUserStateError, selectLoggedInUserStateLoading } from 'src/app/state/selectors/login.selectors';
import { login } from 'src/app/state/actions/login.actions';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  isLoading: boolean = false
  error: string | null = null

  constructor(private fb:FormBuilder, private store: Store<AppState>, private loginService: LoginService, private router: Router, private userService: UserService, private auth: AuthService){}

  // submitForm() {
  //   const { email, password } = this.form.value
  //   const formData:logUser = { email, password }
  //   this.userService.login(formData).subscribe(response => {
  //     this.auth.setis_admin(response.user.isAdmin)
  //     this.auth.setUsername(response.user.username)
  //     this.auth.login()
  //     localStorage.setItem('token', response.token)
  //   })
  // }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })

    this.store.select(selectLoggedInUserStateLoading).subscribe((loading) => {
      this.isLoading = loading
    })
  }

  submitForm() {
    this.store.dispatch(login({ user: this.form.value }))
    this.store.select(selectLoggedInUserStateLoading).subscribe((loading) => {
      this.isLoading = loading
    })

    this.store.select(selectLoggedInUserStateError).subscribe((error) => {
      this.error = error
    })

    this.store.select(selectLoggedInUser).subscribe((user: any) => {
      if (user) {
        if (user.user.isAdmin) {
          this.router.navigate(['/admin'])
        } else {
          this.router.navigate(['/'])
        }
      }
    })
  }

}
