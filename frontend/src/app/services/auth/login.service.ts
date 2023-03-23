import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { loggedInUser2 } from "src/app/state/models/user.model";
import { Router } from "@angular/router";
import { logUser } from "src/app/state/models/user.model";

@Injectable({
  providedIn:'root'
})
export class LoginService {
  constructor(private router: Router, private http: HttpClient) {}

  login(user: logUser):Observable<loggedInUser2> {
    return this.http.post<loggedInUser2>(`http://localhost:4000/api/users/login`, user)
  }
}