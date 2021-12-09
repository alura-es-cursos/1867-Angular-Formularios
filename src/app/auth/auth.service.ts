import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  autorizar(userName: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'http://localhost:3000/user/login',
        {
          userName,
          password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((response) => {
          const token = response.headers.get('x-access-token') ?? '';
          this.userService.guardarToken(token);
        })
      );
  }
}
