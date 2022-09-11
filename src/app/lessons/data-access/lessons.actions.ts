import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Lesson } from 'src/app/shared/api-types/lesson';

export const lessonsActions = createActionGroup({
  source: 'Lessons',
  events: {
    'fetch lessons': emptyProps(),
    'fetch lessons success': props<{ lessons: Array<Lesson> }>(),
    'fetch lessons error': props<{ error: HttpErrorResponse }>(),
    'delete lesson': props<{ id: number }>(),
    'delete lesson success': props<{ id: number }>(),
    'delete lesson error': props<{ error: HttpErrorResponse }>(),
    'assign lesson': props<{ llessonId: number; userId: number }>(),
    'assign lesson success': props<{ llessonId: number; userId: number }>(),
    'assign lesson error': props<{ error: HttpErrorResponse }>(),
  },
});
