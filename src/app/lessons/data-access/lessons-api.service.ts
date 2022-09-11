import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/shared/api-types/lesson';
import { API_URL } from 'src/app/shared/tokens/api-url.token';

@Injectable({
  providedIn: 'root',
})
export class LessonsApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) {}

  fetchLessons(): Observable<Array<Lesson>> {
    return this.http.get<Array<Lesson>>(`${this.apiUrl}/lessons`);
  }

  deleteLesson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/lessons/${id}`);
  }

  assignLesson(llessonId: number, userId: number): Observable<Lesson> {
    return this.http.patch<Lesson>(`${this.apiUrl}/lessons/${llessonId}`, {
      userId,
    });
  }
}
