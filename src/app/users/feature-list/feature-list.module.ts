import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  UsersListComponent,
  UsersListComponentModule,
} from './users-list.component';

@NgModule({
  imports: [
    CommonModule,
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
