import { InjectionToken } from '@angular/core';
import { ActionCreator } from '@ngrx/store';

export const BROADCAST_CHANNEL_ACTIONS = new InjectionToken<Array<string | ActionCreator>>(
	'BROADCAST_CHANNEL_ACTIONS',
);
