import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {
  ICredentials,
  ILoginPayload,
} from '../interfaces/login-credentials.interface';
import {
  IAPIResponse,
  ILoginResponse,
} from '../interfaces/api-responses.interface';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly isLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly isLogged$ = this.isLogged.asObservable();

  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.getLoggedStatus();
  }

  login(credentials: ICredentials): Observable<ILoginResponse> {
    const loginPayload: ILoginPayload = {
      data: credentials,
    };
    return this.http
      .post<IAPIResponse>(this.BASE_URL + '/users/login', loginPayload)
      .pipe(
        map((response: IAPIResponse) => {
          if (response.data && response.data.token) {
            localStorage.setItem('token', response.data.token);
            this.updateSessionState(true);
            return response.data;
          }
        }),
        catchError((err) => {
          return throwError(new HttpErrorResponse(err));
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.updateSessionState(false);
  }

  private updateSessionState(value: boolean): void {
    this.isLogged.next(value);
  }

  private getLoggedStatus(): void {
    if (localStorage.getItem('token')) {
      this.updateSessionState(true);
    }
  }
}
