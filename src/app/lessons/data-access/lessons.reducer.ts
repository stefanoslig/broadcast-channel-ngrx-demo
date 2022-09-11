import { createFeature, createReducer, on } from '@ngrx/store';
import { Lesson } from 'src/app/shared/api-types/lesson';
import { broadcastedLessonsActions } from './lessons-broadcast.actions';
import { lessonsActions } from './lessons.actions';

export interface LessonsStateModel {
  lessons: Array<Lesson>;
}

export const initialState: LessonsStateModel = { lessons: [] };

export const lessonsFeature = createFeature({
  name: 'lessons',
  reducer: createReducer(
    initialState,
    on(lessonsActions.fetchLessonsSuccess, (state, { lessons }) => ({
      ...state,
      lessons,
    })),
    on(
      lessonsActions.assignLessonSuccess,
      broadcastedLessonsActions.assignLessonSuccess,
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
    on(
      lessonsActions.deleteLessonSuccess,
      broadcastedLessonsActions.deleteLessonSuccess,
      (state, { id }) => ({
        ...state,
        lessons: state.lessons.filter((lesson) => lesson.id !== id),
      })
    )
  ),
});
