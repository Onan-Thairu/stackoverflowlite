import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoggedInUserState } from "../reducers/register.reducer";

export const selectLoggedInUserState = createFeatureSelector<LoggedInUserState>('loggedInUser')

export const selectLoggedInUser = createSelector(
  selectLoggedInUserState,
  (state: LoggedInUserState) => state.user
)

export const selectLoggedInUserStateLoading = createSelector(
  selectLoggedInUserState,
  (state: LoggedInUserState) => state.loading
)

export const selectLoggedInUserStateError = createSelector(
  selectLoggedInUserState,
  (state: LoggedInUserState) => state.error
)