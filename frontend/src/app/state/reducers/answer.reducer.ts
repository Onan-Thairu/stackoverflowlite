import { createReducer, on } from '@ngrx/store';
import { loadAnswersSuccess } from '../actions/answer.actions';
import { Answer } from '../models/answer.model';

export interface AnswerState {
  answers: Answer[];
}

export const initialAnswerState: AnswerState = {
  answers: []
};

export const answerReducer = createReducer(
  initialAnswerState,
  on(loadAnswersSuccess, (state, { answers }) => ({
    ...state,
    answers
  }))
);
