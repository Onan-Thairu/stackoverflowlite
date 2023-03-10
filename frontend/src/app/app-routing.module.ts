import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'signup', loadComponent: () => import('./auth/signup/signup.component').then(c => c.SignupComponent)},
  {path:'login', loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
