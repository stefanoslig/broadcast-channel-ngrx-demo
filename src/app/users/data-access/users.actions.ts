import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User, UserEmbedLeanings } from 'src/app/shared/api-types/user';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    'fetch users': emptyProps(),
    'fetch users success': props<{ users: Array<UserEmbedLeanings> }>(),
    'fetch users error': props<{ error: HttpErrorResponse }>(),
    'delete user': props<{ id: number }>(),
    'delete user success': props<{ id: number }>(),
    'delete user error': props<{ error: HttpErrorResponse }>(),
    'add user': props<{ user: Partial<User> }>(),
    'add user success': props<{ user: UserEmbedLeanings }>(),
    'add user error': props<{ error: HttpErrorResponse }>(),
  },
});
