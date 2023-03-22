import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean
  username!: string

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn
    this.username = this.auth.getUsername()
  }

}
