import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AnswerState } from '../reducers/answer.reducer';

export const selectAnswerState = createFeatureSelector<AnswerState>('answers');
export const selectAnswers = createSelector(
  selectAnswerState,
  (state: AnswerState) => state.answers
)
export const selectAnswersLoading = createSelector(
  selectAnswerState,
  (state: AnswerState) => state.loading
)
export const selectAnswerError = createSelector(
  selectAnswerState,
  (state: AnswerState) => state.error
)

// export const selectAllAnswers = createSelector(
//   selectAnswerState,
//   (state: AnswerState) => state.answers
// );

// export const selectAnswersByQuestionId = (questionId: string) => createSelector(
//   selectAllAnswers,
//   (answers) => answers.filter((answer) => answer.question_id === parseInt(questionId))
// );
