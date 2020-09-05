import { Injectable } from '@angular/core';

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
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
