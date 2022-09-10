import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/shared/tokens/api-url.token';
import { User, UserEmbedLeanings } from 'src/app/shared/api-types/user';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_URL) private readonly apiUrl: string
  ) {}

  fetchUsers(): Observable<Array<UserEmbedLeanings>> {
    return this.http.get<Array<UserEmbedLeanings>>(`${this.apiUrl}/users`);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }

  addUser(user: Partial<User>): Observable<UserEmbedLeanings> {
    return this.http.post<UserEmbedLeanings>(`${this.apiUrl}/users`, {
      ...user,
    });
  }
}
