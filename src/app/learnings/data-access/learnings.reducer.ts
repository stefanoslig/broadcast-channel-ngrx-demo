import { createFeature, createReducer, on } from '@ngrx/store';

export interface LearningsStateModel {}

export const initialState: LearningsStateModel = {};

export const learningsFeature = createFeature({
  name: 'learnings',
  reducer: createReducer(initialState),
});
