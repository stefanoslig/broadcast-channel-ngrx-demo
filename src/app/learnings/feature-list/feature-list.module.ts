import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LearningsListComponent,
  LearningsListComponentModule,
} from './learnings-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { learningsFeature } from '../data-access/learnings.reducer';
import { LearningsEffects } from '../data-access/learnings.effects';

@NgModule({
  imports: [
    CommonModule,
    LearningsListComponentModule,
    StoreModule.forFeature(learningsFeature),
    EffectsModule.forFeature([LearningsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: LearningsListComponent,
      },
    ]),
  ],
})
export class FeatureListModule {}
