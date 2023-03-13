// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { CommentService } from '../services/comment.service';
// import {
//   addComment,
//   addCommentFailure,
//   addCommentSuccess,
//   deleteComment,
//   deleteCommentFailure,
//   deleteCommentSuccess,
//   loadComments,
//   loadCommentsFailure,
//   loadCommentsSuccess,
//   updateComment,
//   updateCommentFailure,
//   updateCommentSuccess
// } from '../actions/comment.actions';
// import { Comment } from '../models/comment.model';
// import { of } from 'rxjs';

// @Injectable()
// export class CommentEffects {

//   constructor(private actions$: Actions, private commentService: CommentService) {}

//   loadComments$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadComments),
//       mergeMap(({ answerId }) =>
//         this.commentService.getCommentsByAnswerId(answerId).pipe(
//           map(comments => loadCommentsSuccess({ comments })),
//           catchError(error => of(loadCommentsFailure({ error })))
//         )
//       )
//     )
//   );

//   addComment$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(addComment),
//       mergeMap(({ comment }) =>
//         this.commentService.addComment(comment).pipe(
//           map((addedComment: Comment) => addCommentSuccess({ comment: addedComment })),
//           catchError(error => of(addCommentFailure({ error })))
//         )
//       )
//     )
//   );

//   deleteComment$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(deleteComment),
//     mergeMap(({ commentId }) =>
//       this.commentService.deleteComment(commentId).pipe(
//         map(() => deleteCommentSuccess({ commentId })),
//         catchError(error => of(deleteCommentFailure({ error })))
//       )
//     )
//   )
// );

// updateComment$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(updateComment),
//     mergeMap(({ comment }) =>
//       this.commentService.updateComment(comment).pipe(
//         map((updatedComment: Comment) => updateCommentSuccess({ comment: updatedComment })),
//         catchError(error => of(updateCommentFailure({ error })))
//       )
//     )
//   )
// );
// }

