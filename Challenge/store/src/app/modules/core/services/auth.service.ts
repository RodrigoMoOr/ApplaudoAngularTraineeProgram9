import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from './../../../../environments/environment.prod';
import {
  ICredentials,
  ILoginPayload,
} from './../interfaces/login-credentials.interface';
import {
  ILoginResponse,
  IAPIResponse,
} from './../interfaces/api-requests.interface';

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
          if (response.data) {
            localStorage.setItem('token', response.data.token);
            return response.data;
          }
        }),
        catchError((error: Response) => this.handleError)
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.updateSessionState(false);
  }

  private updateSessionState(value: boolean): void {
    this.isLogged.next(value);
  }

  private handleError(error: Response): void {
    if (error.status === 401) {
      throw new HttpErrorResponse({ error });
    }
  }

  private getLoggedStatus(): void {
    if (localStorage.getItem('token')) {
      this.updateSessionState(true);
    }
  }
}
