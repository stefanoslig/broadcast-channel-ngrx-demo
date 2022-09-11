import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentEmbedLeanings } from 'src/app/shared/api-types/student';
import { studentsActions } from './students.actions';

export interface StudentsStateModel {
  students: Array<StudentEmbedLeanings>;
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
    on(studentsActions.addStudentSuccess, (state, { student }) => ({
      ...state,
      students: [student, ...state.students],
    })),
    on(studentsActions.deleteStudentSuccess, (state, { id }) => ({
      ...state,
      lessons: state.students.filter((lesson) => lesson.id !== id),
    }))
  ),
});
