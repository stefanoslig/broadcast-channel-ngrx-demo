import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { lessonsActions } from './lessons.actions';
import { map, switchMap } from 'rxjs';
import { LessonsApiService } from './lessons-api.service';

@Injectable()
export class LessonsEffects {
  readonly fetchLessons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(lessonsActions.fetchLessons),
      switchMap(() =>
        this.llessonsApiService
          .fetchLessons()
          .pipe(
            map((lessons) =>
              lessonsActions.fetchLessonsSuccess({ lessons })
            )
          )
      )
    )
  );

  readonly deleteLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(lessonsActions.deleteLesson),
      switchMap(({ id }) =>
        this.llessonsApiService
          .deleteLesson(id)
          .pipe(map(() => lessonsActions.deleteLessonSuccess({ id })))
      )
    )
  );

  readonly assignLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(lessonsActions.assignLesson),
      switchMap(({ llessonId, userId }) =>
        this.llessonsApiService
          .assignLesson(llessonId, userId)
          .pipe(
            map(() =>
              lessonsActions.assignLessonSuccess({ llessonId, userId })
            )
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly llessonsApiService: LessonsApiService
  ) {}
}
