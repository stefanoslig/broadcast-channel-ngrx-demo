import { Action, ActionReducer } from '@ngrx/store';
import { broadcastedChannelActions } from './broadcast-channel.actions';

interface BcAction extends Action {
  state: StateObject;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type StateObject = {};

export function bcStateInitializer(
  reducer: ActionReducer<StateObject>
): ActionReducer<StateObject> {
  return function (state, action) {
    if (action.type === broadcastedChannelActions.sendBackInitialState.type) {
      return (action as BcAction).state;
    }

    return reducer(state, action);
  };
}
