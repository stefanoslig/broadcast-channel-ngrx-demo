import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { learningsActions } from './learnings.actions';
import { map, switchMap } from 'rxjs';
import { LearningsApiService } from './learnings-api.service';

@Injectable()
export class LearningsEffects {
  readonly fetchLearnings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(learningsActions.fetchLearnings),
      switchMap(() =>
        this.learningsApiService
          .fetchLearnings()
          .pipe(
            map((learnings) =>
              learningsActions.fetchLearningsSuccess({ learnings })
            )
          )
      )
    )
  );

  readonly deleteLearning$ = createEffect(() =>
    this.actions$.pipe(
      ofType(learningsActions.deleteLearning),
      switchMap(({ id }) =>
        this.learningsApiService
          .deleteLearning(id)
          .pipe(map(() => learningsActions.deleteLearningSuccess({ id })))
      )
    )
  );

  readonly assignLearning$ = createEffect(() =>
    this.actions$.pipe(
      ofType(learningsActions.assignLearning),
      switchMap(({ learningId, userId }) =>
        this.learningsApiService
          .assignLearning(learningId, userId)
          .pipe(
            map(() =>
              learningsActions.assignLearningSuccess({ learningId, userId })
            )
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly learningsApiService: LearningsApiService
  ) {}
}
