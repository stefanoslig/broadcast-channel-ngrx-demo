import { Inject, Injectable } from '@angular/core';
import {
  Actions,
  concatLatestFrom,
  createEffect,
  ofType,
  OnInitEffects,
} from '@ngrx/effects';
import { ActionCreator, Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs';
import { BROADCAST_CHANNEL_ACTIONS } from './broadcast-channel-actions.token';
import { broadcastChannelActions } from './broadcast-channel.actions';
import { BroadcastChannelService } from './broadcast-channel.service';

@Injectable()
export class BroadcastChannelEffects implements OnInitEffects {
  broadcastActions$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          ...this.bcActions,
          broadcastChannelActions.requestInitialState,
          broadcastChannelActions.sendBackInitialState
        ),
        tap((action) => this.bcService.postMessage(action))
      ),
    { dispatch: false }
  );

  onMessage$ = createEffect(() =>
    this.bcService.onMessage$.pipe(
      filter(
        ({ type }) => type !== broadcastChannelActions.requestInitialState.type
      ),
      map((action) => ({
        ...action,
        type: `[Broadcasted ${action.type.replace(/\[/g, '')}`,
      }))
    )
  );

  onRequestInitialState$ = createEffect(() =>
    this.bcService.onMessage$.pipe(
      ofType(broadcastChannelActions.requestInitialState),
      concatLatestFrom(() => this.store.select((state) => state)),
      map(([, state]) =>
        broadcastChannelActions.sendBackInitialState({ state })
      )
    )
  );

  ngrxOnInitEffects() {
    return broadcastChannelActions.requestInitialState();
  }

  constructor(
    private readonly actions$: Actions,
    private readonly bcService: BroadcastChannelService,
    private readonly store: Store,
    @Inject(BROADCAST_CHANNEL_ACTIONS)
    private readonly bcActions: Array<string | ActionCreator>
  ) {}
}
