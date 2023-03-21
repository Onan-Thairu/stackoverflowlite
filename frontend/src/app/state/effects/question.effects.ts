import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { QuestionService } from 'src/app/services/question/question.service';
import { loadQuestions, loadQuestionsFailure, loadQuestionsSuccess } from '../actions/question.actions';
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
}
