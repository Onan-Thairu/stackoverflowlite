import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TokenInterceptorService } from './services/auth/token-interceptor.service';
import { AnswerEffects } from './state/effects/answer.effects';


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
      LoggedInUserEffects,
      AnswerEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
