import { createAction, props } from '@ngrx/store';
import { Question } from '../models/question.model';

export const loadQuestions = createAction('[Question] Load Questions');
export const loadQuestionsSuccess = createAction('[Question] Load Questions Success', props<{ questions: Question[] }>());
export const loadQuestionsFailure = createAction('[Question] Load Questions Failure', props<{ error: any }>());

export const addQuestion = createAction('[Question] Add Question', props<{ question: Question }>());
export const addQuestionSuccess = createAction('[Question] Add Question Success', props<{ question: Question }>());
export const addQuestionFailure = createAction('[Question] Add Question Failure', props<{ error: any }>());

export const deleteQuestion = createAction('[Question] Delete Question', props<{ questionId: number }>());
export const deleteQuestionSuccess = createAction('[Question] Delete Question Success', props<{ questionId: number }>());
export const deleteQuestionFailure = createAction('[Question] Delete Question Failure', props<{ error: any }>());

export const updateQuestion = createAction('[Question] Update Question', props<{ question: Question }>());
export const updateQuestionSuccess = createAction('[Question] Update Question Success', props<{ question: Question }>());
export const updateQuestionFailure = createAction('[Question] Update Question Failure', props<{ error: any }>());
