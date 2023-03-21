import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registerSuccess, User } from '../../interfaces/interfaces';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users: User[] = []
  constructor(private http: HttpClient, private router: Router) { }

  register(user: User): Observable<registerSuccess> {
    return this.http.post<registerSuccess>(`http://localhost:4000/api/users/register`, user)
  }
}
