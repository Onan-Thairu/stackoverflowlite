import { Action, createReducer, on } from "@ngrx/store";
import { register, registerSuccess, registerError } from "../actions/register.actions";
import { loggedInUser } from "../models/user.model";

export interface LoggedInUserState {
  user: loggedInUser | null;
  loading: boolean
  error: any
}

export const loggedInUserinitialState: LoggedInUserState = {
  user: null,
  loading: false,
  error: null
};
export const registerUserReducer = createReducer(
 loggedInUserinitialState,
 on(register, (state, { user }) => ({ ...state, loading: true, error: null })),
 on(registerSuccess, (state, { user }) => ({ ...state, loading: false, user: { ...user }, error: null })),
 on(registerError, (state, { error }) => ({...state, loading: false, error: { ...error }}))
)

export function reducer(state: any, action: Action) {
  return registerUserReducer
}