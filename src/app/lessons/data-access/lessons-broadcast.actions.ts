import { createActionGroup, props } from '@ngrx/store';

export const broadcastedLessonsActions = createActionGroup({
  source: 'Broadcasted Lessons',
  events: {
    'delete lesson success': props<{ id: number }>(),
    'assign lesson success': props<{ llessonId: number; userId: number }>(),
  },
});
