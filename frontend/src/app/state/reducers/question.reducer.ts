import { createReducer, on } from '@ngrx/store';
import { addQuestionSuccess, deleteQuestionSuccess, loadQuestions, loadQuestionsSuccess, updateQuestionSuccess } from '../actions/question.actions';
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
  on(addQuestionSuccess, (state, { question }) => ({
    ...state,
    questions: [...state.questions, question]
  })),
  on(deleteQuestionSuccess, (state, { questionId }) => ({
    ...state,
    questions: state.questions.filter(q => q.id !== questionId)
  })),
  on(updateQuestionSuccess, (state, { question }) => ({
    ...state,
    questions: state.questions.map(q => q.id === question.id ? question : q)
  }))

);
