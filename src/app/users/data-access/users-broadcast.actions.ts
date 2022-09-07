import { createActionGroup, emptyProps } from '@ngrx/store';

export const broadcastedUsersActions = createActionGroup({
  source: 'Broadcasted users',
  events: {
    s: emptyProps(),
  },
});
