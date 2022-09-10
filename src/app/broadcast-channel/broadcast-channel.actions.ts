import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { StateObject } from './broadcast-channel.meta-reducer';

export const broadcastChannelActions = createActionGroup({
  source: 'Broadcast channel',
  events: {
    'request initial state': emptyProps(),
    'send back initial state': props<{ state: StateObject }>(),
  },
});

export const broadcastedChannelActions = createActionGroup({
  source: 'Broadcasted Broadcast channel',
  events: {
    'send back initial state': props<{ state: StateObject }>(),
  },
});
