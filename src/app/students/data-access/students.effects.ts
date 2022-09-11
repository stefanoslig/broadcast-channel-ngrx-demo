import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { studentsActions } from './students.actions';
import { map, switchMap } from 'rxjs';
import { StudentsApiService } from './students-api.service';

@Injectable()
export class StudentsEffects {
  readonly fetchStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentsActions.fetchStudents),
      switchMap(() =>
        this.studentsApiService
          .fetchStudents()
          .pipe(map((students) => studentsActions.fetchStudentsSuccess({ students })))
      )
    )
  );

  readonly deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentsActions.deleteStudent),
      switchMap(({ id }) =>
        this.studentsApiService
          .deleteStudent(id)
          .pipe(map(() => studentsActions.deleteStudentSuccess({ id })))
      )
    )
  );

  readonly addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentsActions.addStudent),
      switchMap(({ student }) =>
        this.studentsApiService
          .addStudent(student)
          .pipe(map((student) => studentsActions.addStudentSuccess({ student })))
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly studentsApiService: StudentsApiService
  ) {}
}
