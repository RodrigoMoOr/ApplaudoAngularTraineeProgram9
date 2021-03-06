import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { createEffect, ofType, Actions } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { login, logout } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(login),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap((action) => {
          localStorage.removeItem('user');
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
