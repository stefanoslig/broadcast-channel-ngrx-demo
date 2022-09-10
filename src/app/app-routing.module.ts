import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        loadChildren: () =>
          import('src/app/users/feature-list').then((m) => m.FeatureListModule),
      },
      {
        path: 'learnings',
        loadChildren: () =>
          import('src/app/learnings/feature-list').then(
            (m) => m.FeatureListModule
          ),
      },
    ]),
  ],
})
export class AppRoutingModule {}
