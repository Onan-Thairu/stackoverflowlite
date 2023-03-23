import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { questionReducer } from './state/reducers/question.reducer';
import { answerReducer } from './state/reducers/answer.reducer';
import { commentReducer } from './state/reducers/comment.reducer';
import { QuestionEffects } from './state/effects/question.effects';
import { RegisterUserEffects } from './state/effects/register.effects';
import { registerUserReducer } from './state/reducers/register.reducer';
import { _loggedInUserReducer } from './state/reducers/login.reducer';
import { LoggedInUserEffects } from './state/effects/login.effects';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderComponent,
    StoreModule.forRoot({
      questions: questionReducer,
      registerUser: registerUserReducer,
      loggedInUser: _loggedInUserReducer,
      answers: answerReducer,
      comments: commentReducer
    }, {}),
    EffectsModule.forRoot([
      QuestionEffects,
      RegisterUserEffects,
      LoggedInUserEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
