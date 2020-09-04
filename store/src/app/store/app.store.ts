import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
  createReducer,
  on,
  createAction,
  props,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { ICart } from './../modules/features/cart/common/interfaces/cart-interfaces';
import { IUser } from './../modules/features/auth/common/interfaces/api-responses.interface';

/**
 * App States
 */
export interface AppState {
  user: IUser;
  cart: ICart;
}

export const initialAppState: AppState = {
  user: undefined,
  cart: undefined,
};

/**
 * App Actions
 */
export const login = createAction(
  '[Login Page] Login',
  props<{ user: IUser; cart: ICart }>()
);

export const logout = createAction('[Info Dialog] Logout');

export const addItem = createAction(
  '[Home Page| Product Page] Add',
  props<{ user: IUser; cart: undefined }>()
);

export const removeItem = createAction(
  '[Cart Page] Remove',
  props<{ user: IUser; cart: ICart }>()
);
/**
 * App Reducers
 */
export const _appReducer = createReducer(
  initialAppState,
  on(login, (state, action) => {
    return { user: action.user, cart: state.cart };
  }),

  on(logout, () => {
    return { user: undefined, cart: undefined };
  }),

  on(addItem, (state, action) => {
    return { user: state.user, cart: action.cart };
  })
);

export function appReducer(state, action): AppState {
  return _appReducer(state, action);
}

/**
 * App Selectors
 */
export const selectAuthState = createFeatureSelector<AppState>('app');

export const isLogged = createSelector(selectAuthState, (app) => !!app.user);

/**
 * App Effects
 */

@Injectable()
export class AppEffects {
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
