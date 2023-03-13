import { createReducer, on } from '@ngrx/store';
import { loadQuestionsSuccess } from '../actions/question.actions';
import { Question } from '../models/question.model';

export interface QuestionState {
  questions: Question[];
}

export const initialQuestionState: QuestionState = {
  questions: []
};

export const questionReducer = createReducer(
  initialQuestionState,
  on(loadQuestionsSuccess, (state, { questions }) => ({
    ...state,
    questions
  }))
);
