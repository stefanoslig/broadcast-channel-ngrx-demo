import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const broadcastedLearningsActions = createActionGroup({
  source: 'Broadcasted learnings',
  events: {
    s: emptyProps(),
  },
});
