import { createAction, props } from "@ngrx/store";
import { logUser } from "../models/user.model";
import { loggedInUser2 } from "../models/user.model";

export const login = createAction('[Login] Login', props<{ user: logUser }>())
export const loginSuccess = createAction('[Login] Login Success', props<{ user: loggedInUser2 }>())
export const loginError = createAction('[Login] Login Error', props<{ error: any }>())