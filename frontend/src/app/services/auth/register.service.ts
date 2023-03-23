import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/state/app.state";
import { User } from "src/app/state/models/user.model";
import { loggedInUser } from "src/app/state/models/user.model";
import { register } from "src/app/state/actions/register.actions";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private store: Store<AppState>, private router: Router, private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post('http://localhost:4000/api/users/register', user)
  }
}