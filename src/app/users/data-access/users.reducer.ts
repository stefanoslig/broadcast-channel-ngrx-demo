import { createFeature, createReducer, on } from '@ngrx/store';

export interface UsersStateModel {}

export const initialState: UsersStateModel = {};

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(initialState),
});
