import { createFeature, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from './user.model';

export interface UserState {
  users: User[] | undefined;
}

export const initialState: UserState = {
  users: undefined,
};

const reducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
  }))
);

export const userFeature = createFeature({
  name: 'user',
  reducer,
});
