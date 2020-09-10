import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UserActions from '../actions/user.actions';
import { AuthService } from './../../modules/core/services/auth.service';
import { ILoginResponse } from './../../modules/core/interfaces/api-responses.interface';

@Injectable()
export class UserEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      switchMap((login) =>
        this.authService.login(login.credentials).pipe(
          catchError((error) => of(UserActions.loginFailure(error))),
          tap((loginResponse: ILoginResponse) => {
            localStorage.setItem('token', loginResponse.token);
            localStorage.setItem('user', JSON.stringify(loginResponse.user));
            this.router.navigate(['/home']);
          }),
          map((loginResponse: ILoginResponse) => {
            return UserActions.loginSuccess({ login: loginResponse });
          })
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
        tap((action) => {
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          this.authService.logout();
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) {}
}
