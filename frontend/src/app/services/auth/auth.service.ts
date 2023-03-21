import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  isRegistered = false
  isLoggedIn = false

  register() {
    this.isRegistered = true
    this.router.navigate(['/login'])
  }

  login() {
    this.isLoggedIn = true
    this.router.navigate([''])
  }

  logout() {
    this.isLoggedIn = false
    this.router.navigate(['/login'])
  }
}
