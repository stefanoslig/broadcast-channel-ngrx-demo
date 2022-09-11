import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { StudentEmbedLessons } from 'src/app/shared/api-types/student';

export const broadcastedStudentsActions = createActionGroup({
  source: 'Broadcasted Students',
  events: {
    'delete student success': props<{ id: number }>(),
    'add student success': props<{ student: StudentEmbedLessons }>(),
  },
});
