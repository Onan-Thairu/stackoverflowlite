import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { LoginService } from "src/app/services/auth/login.service";
import { login, loginSuccess, loginError } from "../actions/login.actions";

@Injectable()
export class LoggedInUserEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {}

  loginUser$ = createEffect(() =>
  this.actions$.pipe(
  ofType(login),
  mergeMap((action) =>
      this.loginService.login(action.user).pipe(
          tap((user) => {
              localStorage.setItem("token", user.token);
          }),
      map((user) => loginSuccess({ user })),
      catchError(async (error) => loginError({ error }))
      )
  )
  )
);
}