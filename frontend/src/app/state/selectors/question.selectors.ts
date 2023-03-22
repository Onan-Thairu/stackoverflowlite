import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { QuestionState } from '../reducers/question.reducer';

export const selectQuestionState = createFeatureSelector<QuestionState>('questions')

export const selectAllQuestions = createSelector(
  selectQuestionState,
  (state: QuestionState) => state.questions
);

export const selectQuestionById = (id: string) => createSelector(
  selectAllQuestions,
  (questions) => questions.find((question) => question.id === id)
);
