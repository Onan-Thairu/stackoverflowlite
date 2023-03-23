import { createAction, props } from "@ngrx/store";
import { loggedInUser, User } from "../models/user.model";
export const register = createAction('[Register] Register', props<{ user: User }>())

export const registerSuccess = createAction('[Register] Register Success', props<{ user: any}>())

export const registerError = createAction('[Register] Register Error', props<{ error: any }>())