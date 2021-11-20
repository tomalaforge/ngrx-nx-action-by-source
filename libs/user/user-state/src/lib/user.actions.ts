import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

// export const loadUsers = createAction('[App Component] Load users');
export const loadUsersSuccess = createAction(
  '[User Effect] Load users SUCCESS',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User Effect] Load users FAILURE'
);
