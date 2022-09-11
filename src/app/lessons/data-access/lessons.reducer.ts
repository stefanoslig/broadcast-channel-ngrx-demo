import { createFeature, createReducer, on } from '@ngrx/store';
import { Lesson } from 'src/app/shared/api-types/lesson';
import { lessonsActions } from './lessons.actions';

export interface LessonsStateModel {
  lessons: Array<Lesson>;
}

export const initialState: LessonsStateModel = { lessons: [] };

export const llessonsFeature = createFeature({
  name: 'lessons',
  reducer: createReducer(
    initialState,
    on(lessonsActions.fetchLessonsSuccess, (state, { lessons }) => ({
      ...state,
      lessons,
    })),
    on(
      lessonsActions.assignLessonSuccess,
      (state, { llessonId, userId }) => ({
        ...state,
        lessons: state.lessons.map((item) => {
          if (item.id !== llessonId) {
            return item;
          }

          return {
            ...item,
            userId,
          };
        }),
      })
    ),
    on(lessonsActions.deleteLessonSuccess, (state, { id }) => ({
      ...state,
      lessons: state.lessons.filter((lesson) => lesson.id !== id),
    }))
  ),
});
