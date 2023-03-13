// import { createSelector } from '@ngrx/store';
// import { AppState } from '../app.state';
// import { CommentState } from '../reducers/comment.reducer';

// export const selectCommentState = (state: AppState) => state.comments;

// export const selectAllComments = createSelector(
//   selectCommentState,
//   (state: CommentState) => state.comments
// );

// export const selectCommentsByAnswerId = (answerId: string) => createSelector(
//   selectAllComments,
//   (comments) => comments.filter((comment) => comment.answer_id === parseInt(answerId))
// );
