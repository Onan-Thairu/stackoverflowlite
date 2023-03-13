// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { AnswerService } from '../services/answer.service';
// import { loadAnswers, loadAnswersFailure, loadAnswersSuccess } from '../actions/answer.actions';
// import { of } from 'rxjs';

// @Injectable()
// export class AnswerEffects {

//   constructor(private actions$: Actions, private answerService: AnswerService) {}

//   loadAnswers$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadAnswers),
//       mergeMap(({ questionId }) =>
//         this.answerService.getAnswersByQuestionId(questionId).pipe(
//           map(answers => loadAnswersSuccess({ answers })),
//           catchError(error => of(loadAnswersFailure({ error })))
//         )
//       )
//     )
//   );
// }
