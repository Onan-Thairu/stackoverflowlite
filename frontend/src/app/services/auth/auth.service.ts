import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  isRegistered = false
  isLoggedIn = false
  private is_admin = ''
  public username = ''

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

  getis_admin() {
    return this.is_admin
  }

  setis_admin(is_admin: string) {
    this.is_admin = is_admin
  }

  getUsername() {
    return this.username
  }

  setUsername(username: string) {
    this.username = username
  }
  
  getAuthStatus(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn)
      }, 10)
    })
    return promise
  }
}
