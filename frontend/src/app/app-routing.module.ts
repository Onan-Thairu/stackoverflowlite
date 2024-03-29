import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)},
  {path:'signup', loadComponent: () => import('./auth/signup/signup.component').then(c => c.SignupComponent)},
  {path:'login', loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent)},
  {path:'ask-question', loadComponent: () => import('./ask-question/ask-question.component').then(c => c.AskQuestionComponent)},
  {path:'view-question', loadComponent: () => import('./question-view/question-view.component').then(c => c.QuestionViewComponent)},
  {path:'profile', loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent)},
  {path:'admin', loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent)},
  {path:'**', loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
