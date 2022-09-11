import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentEmbedLessons } from 'src/app/shared/api-types/student';
import { broadcastedStudentsActions } from './students-broadcast.actions';
import { studentsActions } from './students.actions';

export interface StudentsStateModel {
  students: Array<StudentEmbedLessons>;
}

export const initialState: StudentsStateModel = { students: [] };

export const studentsFeature = createFeature({
  name: 'students',
  reducer: createReducer(
    initialState,
    on(studentsActions.fetchStudentsSuccess, (state, { students }) => ({
      ...state,
      students,
    })),
    on(
      studentsActions.addStudentSuccess,
      broadcastedStudentsActions.addStudentSuccess,
      (state, { student }) => ({
        ...state,
        students: [student, ...state.students],
      })
    ),
    on(
      studentsActions.deleteStudentSuccess,
      broadcastedStudentsActions.deleteStudentSuccess,
      (state, { id }) => ({
        ...state,
        lessons: state.students.filter((lesson) => lesson.id !== id),
      })
    )
  ),
});
