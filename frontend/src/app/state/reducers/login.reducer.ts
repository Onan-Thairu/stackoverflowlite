import { createReducer, on } from "@ngrx/store";
import { loggedInUser2 } from "../models/user.model";
import { login, loginSuccess, loginError } from "../actions/login.actions";

export interface loggedInUserState {
  user: loggedInUser2 | null;
  loading: boolean;
  error: any;
}

export const loggedInUserInitialState: loggedInUserState = {
  user: null,
  loading: false,
  error: null
}

export const _loggedInUserReducer = createReducer(
  loggedInUserInitialState,
  on(login, state => ({...state, loading: true, error: null })),
  on(loginSuccess, (state, { user }) => ({ ...state, loading: false, user: { ...user } })),
  on(loginError, (state, { error }) => ({ ...state, loading: false, error: error }))
  )