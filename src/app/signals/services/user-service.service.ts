import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  public getUserById(id: number): Observable<User | null> {
    return this.http
      .get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(map((response: SingleUserResponse) => response.data));
    // .pipe(catchError(() => of(null)));
  }
}
