import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { QuestionService } from 'src/app/services/question/question.service';
import { loadQuestions, loadQuestionsFailure, loadQuestionsSuccess, addQuestion, addQuestionSuccess, addQuestionFailure } from '../actions/question.actions';
import { of } from 'rxjs';

@Injectable()
export class QuestionEffects {

  constructor(private actions$: Actions, private questionService: QuestionService) {}

  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestions),
      mergeMap(() =>
        this.questionService.getQuestions().pipe(
          map(questions => loadQuestionsSuccess({ questions })),
          catchError(error => of(loadQuestionsFailure({ error })))
        )
      )
    )
  );

  addQuestions$ = createEffect(() => this.actions$.pipe(
    ofType(addQuestion),
    mergeMap((action) => this.questionService.createQuestion(action.question).pipe(
      map(question => addQuestionSuccess({ question })),
      catchError(error => of(addQuestionFailure({ error })))
    ))
  ))
}
