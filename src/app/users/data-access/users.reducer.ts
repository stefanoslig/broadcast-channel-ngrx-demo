import { createFeature, createReducer, on } from '@ngrx/store';
import { UserEmbedLeanings } from 'src/app/shared/api-types/user';
import { usersActions } from './users.actions';

export interface UsersStateModel {
  users: Array<UserEmbedLeanings>;
}

export const initialState: UsersStateModel = { users: [] };

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialState,
    on(usersActions.fetchUsersSuccess, (state, { users }) => ({
      ...state,
      users,
    })),
    on(usersActions.addUserSuccess, (state, { user }) => ({
      ...state,
      users: [user, ...state.users],
    })),
    on(usersActions.deleteUserSuccess, (state, { id }) => ({
      ...state,
      learnings: state.users.filter((learning) => learning.id !== id),
    }))
  ),
});
