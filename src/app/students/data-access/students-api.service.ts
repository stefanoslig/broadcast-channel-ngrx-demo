import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/shared/tokens/api-url.token';
import { Student, StudentEmbedLessons } from 'src/app/shared/api-types/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) {}

  fetchStudents(): Observable<Array<StudentEmbedLessons>> {
    return this.http.get<Array<StudentEmbedLessons>>(`${this.apiUrl}/students`);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/students/${id}`);
  }

  addStudent(student: Partial<Student>): Observable<StudentEmbedLessons> {
    return this.http.post<StudentEmbedLessons>(`${this.apiUrl}/students`, {
      ...student,
    });
  }
}
