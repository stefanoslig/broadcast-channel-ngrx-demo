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
          import('src/app/users/feature-shell').then(
            (m) => m.UsersFeatureShellModule
          ),
      },
      {
        path: 'learnings',
        loadChildren: () =>
          import('src/app/learnings/feature-shell').then(
            (m) => m.LearningsFeatureShellModule
          ),
      },
    ]),
  ],
})
export class AppRoutingModule {}
