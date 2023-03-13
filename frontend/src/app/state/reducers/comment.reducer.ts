import { createReducer, on } from '@ngrx/store';
import { addCommentSuccess, deleteCommentSuccess, loadCommentsSuccess, updateCommentSuccess } from '../actions/comment.actions';
import { Comment } from '../models/comment.model';

export interface CommentState {
  comments: Comment[];
}

export const initialCommentState: CommentState = {
  comments: []
};

export const commentReducer = createReducer(
  initialCommentState,
  on(loadCommentsSuccess, (state, { comments }) => ({
    ...state,
    comments
  })),
  on(addCommentSuccess, (state, { comment }) => ({
    ...state,
    comments: [...state.comments, comment]
  })),
  on(deleteCommentSuccess, (state, { commentId }) => ({
    ...state,
    comments: state.comments.filter(comment => comment.id !== commentId)
  })),
  on(updateCommentSuccess, (state, { comment }) => ({
    ...state,
    comments: state.comments.map(c => c.id === comment.id ? comment : c)
  }))
);
