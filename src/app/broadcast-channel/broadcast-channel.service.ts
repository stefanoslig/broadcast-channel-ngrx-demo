import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Action } from '@ngrx/store';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BroadcastChannelService implements OnDestroy {
  private readonly broadcastChannel!: BroadcastChannel;
  private readonly _onMessage$ = new Subject<Action>();
  readonly onMessage$ = this._onMessage$.asObservable();

  constructor(private readonly ngZone: NgZone) {
    this.broadcastChannel = new BroadcastChannel('broadcastChannelName');
    this.broadcastChannel.onmessage = (message) =>
      this.ngZone.run(() => this._onMessage$.next(message.data));
  }

  postMessage(message: Action): void {
    this.broadcastChannel.postMessage(message);
  }

  ngOnDestroy() {
    this.broadcastChannel.close();
  }
}
