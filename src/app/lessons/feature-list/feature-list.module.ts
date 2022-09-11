import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LessonsListComponent,
  LessonsListComponentModule,
} from './lessons-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { llessonsFeature } from '../data-access/lessons.reducer';
import { LessonsEffects } from '../data-access/lessons.effects';

@NgModule({
  imports: [
    CommonModule,
    LessonsListComponentModule,
    StoreModule.forFeature(llessonsFeature),
    EffectsModule.forFeature([LessonsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: LessonsListComponent,
      },
    ]),
  ],
})
export class FeatureListModule {}
