import { createActionGroup, emptyProps } from '@ngrx/store';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    s: emptyProps(),
  },
});
