import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from './../../../../environments/environment';
import { IAPIResponse } from './../common/interfaces/api-responses.interface';
import { ICredentials } from './../common/interfaces/login-credentials.interface';

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

  login(credentials: ICredentials): Observable<boolean> {
    return this.http
      .post<IAPIResponse>(this.BASE_URL + '/users/login', credentials)
      .pipe(
        map((response: IAPIResponse) => {
          if (response.data && response.data.token) {
            return true;
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
