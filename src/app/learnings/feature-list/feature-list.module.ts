import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LearningsListComponent,
  LearningsListComponentModule,
} from './learnings-list.component';

@NgModule({
  imports: [
    CommonModule,
    LearningsListComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: LearningsListComponent,
      },
    ]),
  ],
})
export class FeatureListModule {}
