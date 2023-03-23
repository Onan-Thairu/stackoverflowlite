import { createReducer, on } from '@ngrx/store';
import { loadAnswers, loadAnswersSuccess, loadAnswersFailure } from '../actions/answer.actions';
import { Answer } from '../models/answer.model';

export interface AnswerState {
  answers: Answer[];
  loading: boolean;
  error: any
}

export const initialAnswerState: AnswerState = {
  answers: [],
  loading: false,
  error: null
};

export const answerReducer = createReducer(
  initialAnswerState,
  on(loadAnswers, state => ({
    ...state,
    loading: true
  })),
  on(loadAnswersSuccess, (state, { answers }) => ({
    ...state,
    answers: [...answers],
    loading: false,
    error: null
  })),
  
);
