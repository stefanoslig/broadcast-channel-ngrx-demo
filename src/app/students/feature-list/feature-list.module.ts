import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  StudentsListComponent,
  StudentsListComponentModule,
} from './students-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from '../data-access/students.effects';
import { studentsFeature } from '../data-access/students.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(studentsFeature),
    EffectsModule.forFeature([StudentsEffects]),
    StudentsListComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentsListComponent,
      },
    ]),
  ],
})
export class FeatureListModule {}
