import { createFeature, createReducer, on } from '@ngrx/store';
import { Learning } from 'src/app/shared/api-types/learning';
import { learningsActions } from './learnings.actions';

export interface LearningsStateModel {
  learnings: Array<Learning>;
}

export const initialState: LearningsStateModel = { learnings: [] };

export const learningsFeature = createFeature({
  name: 'learnings',
  reducer: createReducer(
    initialState,
    on(learningsActions.fetchLearningsSuccess, (state, { learnings }) => ({
      ...state,
      learnings,
    })),
    on(
      learningsActions.assignLearningSuccess,
      (state, { learningId, userId }) => ({
        ...state,
        learnings: state.learnings.map((item) => {
          if (item.id !== learningId) {
            return item;
          }

          return {
            ...item,
            userId,
          };
        }),
      })
    ),
    on(learningsActions.deleteLearningSuccess, (state, { id }) => ({
      ...state,
      learnings: state.learnings.filter((learning) => learning.id !== id),
    }))
  ),
});
