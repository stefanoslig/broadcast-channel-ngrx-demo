import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  UsersListComponent,
  UsersListComponentModule,
} from './users-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '../data-access/users.effects';
import { usersFeature } from '../data-access/users.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeature),
    EffectsModule.forFeature([UsersEffects]),
    UsersListComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersListComponent,
      },
    ]),
  ],
})
export class FeatureListModule {}
