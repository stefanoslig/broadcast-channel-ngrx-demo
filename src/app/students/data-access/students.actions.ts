import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Student, StudentEmbedLessons } from 'src/app/shared/api-types/student';

export const studentsActions = createActionGroup({
  source: 'Students',
  events: {
    'fetch students': emptyProps(),
    'fetch students success': props<{ students: Array<StudentEmbedLessons> }>(),
    'fetch students error': props<{ error: HttpErrorResponse }>(),
    'delete student': props<{ id: number }>(),
    'delete student success': props<{ id: number }>(),
    'delete student error': props<{ error: HttpErrorResponse }>(),
    'add student': props<{ student: Partial<Student> }>(),
    'add student success': props<{ student: StudentEmbedLessons }>(),
    'add student error': props<{ error: HttpErrorResponse }>(),
  },
});
