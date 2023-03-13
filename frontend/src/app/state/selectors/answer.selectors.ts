// import { createSelector } from '@ngrx/store';
// import { AppState } from '../app.state';
// import { AnswerState } from '../reducers/answer.reducer';

// export const selectAnswerState = (state: AppState) => state.answers;

// export const selectAllAnswers = createSelector(
//   selectAnswerState,
//   (state: AnswerState) => state.answers
// );

// export const selectAnswersByQuestionId = (questionId: string) => createSelector(
//   selectAllAnswers,
//   (answers) => answers.filter((answer) => answer.question_id === parseInt(questionId))
// );
