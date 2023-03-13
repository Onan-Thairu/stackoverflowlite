import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment.model';

export const loadComments = createAction('[Comment] Load Comments', props<{ answerId: number }>());
export const loadCommentsSuccess = createAction('[Comment] Load Comments Success', props<{ comments: Comment[] }>());
export const loadCommentsFailure = createAction('[Comment] Load Comments Failure', props<{ error: any }>());

export const addComment = createAction('[Comment] Add Comment', props<{ comment: Comment }>());
export const addCommentSuccess = createAction('[Comment] Add Comment Success', props<{ comment: Comment }>());
export const addCommentFailure = createAction('[Comment] Add Comment Failure', props<{ error: any }>());

export const deleteComment = createAction('[Comment] Delete Comment', props<{ commentId: number }>());
export const deleteCommentSuccess = createAction('[Comment] Delete Comment Success', props<{ commentId: number }>());
export const deleteCommentFailure = createAction('[Comment] Delete Comment Failure', props<{ error: any }>());

export const updateComment = createAction('[Comment] Update Comment', props<{ comment: Comment }>());
export const updateCommentSuccess = createAction('[Comment] Update Comment Success', props<{ comment: Comment }>());
export const updateCommentFailure = createAction('[Comment] Update Comment Failure', props<{ error: any }>());
