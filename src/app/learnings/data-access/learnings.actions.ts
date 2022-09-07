import { createActionGroup, emptyProps } from '@ngrx/store';

export const learningsActions = createActionGroup({
  source: 'Learnings',
  events: {
    s: emptyProps(),
  },
});
