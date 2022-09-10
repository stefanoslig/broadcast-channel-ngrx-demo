import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Learning } from 'src/app/shared/api-types/learning';
import { API_URL } from 'src/app/shared/tokens/api-url.token';

@Injectable({
  providedIn: 'root',
})
export class LearningsApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) {}

  fetchLearnings(): Observable<Array<Learning>> {
    return this.http.get<Array<Learning>>(`${this.apiUrl}/learnings`);
  }

  deleteLearning(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/learnings/${id}`);
  }

  assignLearning(learningId: number, userId: number): Observable<Learning> {
    return this.http.patch<Learning>(`${this.apiUrl}/learnings/${learningId}`, {
      userId,
    });
  }
}
