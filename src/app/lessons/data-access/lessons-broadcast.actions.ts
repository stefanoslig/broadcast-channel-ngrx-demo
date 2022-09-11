import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const broadcastedLessonsActions = createActionGroup({
  source: 'Broadcasted lessons',
  events: {
    s: emptyProps(),
  },
});
