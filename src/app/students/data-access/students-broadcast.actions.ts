import { createActionGroup, emptyProps } from '@ngrx/store';

export const broadcastedStudentsActions = createActionGroup({
  source: 'Broadcasted students',
  events: {
    s: emptyProps(),
  },
});
