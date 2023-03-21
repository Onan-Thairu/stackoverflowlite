import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { logUser } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup

  constructor(private fb:FormBuilder, private router: Router, private userService: UserService, private auth: AuthService){}

  submitForm() {
    const { email, password } = this.form.value
    const formData:logUser = { email, password }
    this.userService.login(formData).subscribe(response => {
      console.log(response)
      this.auth.setis_admin(response.user.isAdmin)
      this.auth.setUsername(response.user.username)
      this.auth.login()
      localStorage.setItem('token', response.token)
    })
    
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })
  }

}
