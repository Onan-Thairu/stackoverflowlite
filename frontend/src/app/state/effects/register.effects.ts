import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { RegisterService } from "src/app/services/auth/register.service";
import { register, registerSuccess, registerError } from "../actions/register.actions";

@Injectable()
export class RegisterUserEffects {
  constructor(private actions$: Actions, private registerService: RegisterService) {}

  registerUser$ = createEffect(() =>
  this.actions$.pipe(
      ofType(register),
      mergeMap((action) =>
          this.registerService.registerUser(action.user).pipe(
              map((user) => registerSuccess({ user })),
              catchError(async (error) => registerError({ error }))
          )
      )
  )
);
}