import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  autorizar(userName: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName,
      password,
    });
  }
}
