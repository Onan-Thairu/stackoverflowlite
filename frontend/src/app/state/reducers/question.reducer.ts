import { createReducer, on } from '@ngrx/store';
import { addQuestion, addQuestionFailure, addQuestionSuccess, deleteQuestionSuccess, loadQuestions, loadQuestionsSuccess, updateQuestionSuccess } from '../actions/question.actions';
import { Question } from '../models/question.model';

export interface QuestionState {
  questions: Question[];
}

export const initialQuestionState: QuestionState = {
  questions: []
};

export const questionReducer = createReducer(
  initialQuestionState,
  on(loadQuestions, (state) => ({...state})),
  on(loadQuestionsSuccess, (state, { questions }) => ({
    ...state,
    questions : [...questions]
  })),
  on(addQuestion, (state, { question }) => {
    return {
      ...state
    }
  }),
  on(addQuestionSuccess, (state, { question }) => ({
    ...state,
    questions: [...state.questions, question]
  })),
  on(addQuestionFailure, (state, { error }) => {
    return {
      ...state,
      error
    }
  }),
  on(deleteQuestionSuccess, (state, { questionId }) => ({
    ...state,
    questions: state.questions.filter(q => q.id !== questionId)
  })),
  on(updateQuestionSuccess, (state, { question }) => ({
    ...state,
    questions: state.questions.map(q => q.id === question.id ? question : q)
  }))

);
