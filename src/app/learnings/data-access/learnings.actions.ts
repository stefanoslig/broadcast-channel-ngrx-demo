import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Learning } from 'src/app/shared/api-types/learning';

export const learningsActions = createActionGroup({
  source: 'Learnings',
  events: {
    'fetch learnings': emptyProps(),
    'fetch learnings success': props<{ learnings: Array<Learning> }>(),
    'fetch learnings error': props<{ error: HttpErrorResponse }>(),
    'delete learning': props<{ id: number }>(),
    'delete learning success': props<{ id: number }>(),
    'delete learning error': props<{ error: HttpErrorResponse }>(),
    'assign learning': props<{ learningId: number; userId: number }>(),
    'assign learning success': props<{ learningId: number; userId: number }>(),
    'assign learning error': props<{ error: HttpErrorResponse }>(),
  },
});
