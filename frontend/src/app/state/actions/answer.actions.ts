import { createAction, props } from '@ngrx/store';
import { Answer } from '../models/answer.model';

export const loadAnswers = createAction('[Answer] Load Answers', props<{ questionId: number }>());
export const loadAnswersSuccess = createAction('[Answer] Load Answers Success', props<{ answers: Answer[] }>());
export const loadAnswersFailure = createAction('[Answer] Load Answers Failure', props<{ error: any }>());

export const addAnswer = createAction('[Answer] Add Answer', props<{ answer: Answer }>());
export const addAnswerSuccess = createAction('[Answer] Add Answer Success', props<{ answer: Answer }>());
export const addAnswerFailure = createAction('[Answer] Add Answer Failure', props<{ error: any }>());

export const deleteAnswer = createAction('[Answer] Delete Answer', props<{ answerId: number }>());
export const deleteAnswerSuccess = createAction('[Answer] Delete Answer Success', props<{ answerId: number }>());
export const deleteAnswerFailure = createAction('[Answer] Delete Answer Failure', props<{ error: any }>());

export const updateAnswer = createAction('[Answer] Update Answer', props<{ answer: Answer }>());
export const updateAnswerSuccess = createAction('[Answer] Update Answer Success', props<{ answer: Answer }>());
export const updateAnswerFailure = createAction('[Answer] Update Answer Failure', props<{ error: any }>());
