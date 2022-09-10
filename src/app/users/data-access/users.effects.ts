import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { usersActions } from './users.actions';
import { map, switchMap } from 'rxjs';
import { UsersApiService } from './users-api.service';

@Injectable()
export class UsersEffects {
  readonly fetchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.fetchUsers),
      switchMap(() =>
        this.usersApiService
          .fetchUsers()
          .pipe(map((users) => usersActions.fetchUsersSuccess({ users })))
      )
    )
  );

  readonly deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.deleteUser),
      switchMap(({ id }) =>
        this.usersApiService
          .deleteUser(id)
          .pipe(map(() => usersActions.deleteUserSuccess({ id })))
      )
    )
  );

  readonly addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.addUser),
      switchMap(({ user }) =>
        this.usersApiService
          .addUser(user)
          .pipe(map((user) => usersActions.addUserSuccess({ user })))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly usersApiService: UsersApiService
  ) {}
}
