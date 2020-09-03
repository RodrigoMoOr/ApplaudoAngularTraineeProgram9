import {
  createAction,
  props,
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { IUser } from '../modules/features/auth/interfaces/api-responses.interface';

/**
 * Auth States
 */
export interface AuthState {
  user: IUser;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

/**
 * Auth Actions
 */
export const login = createAction(
  '[Login Page] Login',
  props<{ user: IUser }>()
);

export const logout = createAction('[Info Dialog] Logout');

/**
 * Auth Reducers
 */
export const _authReducer = createReducer(
  initialAuthState,
  on(login, (state, action) => {
    return { user: action.user };
  }),

  on(logout, (state, action) => {
    return { user: undefined };
  })
);

export function authReducer(state, action): AuthState {
  return _authReducer(state, action);
}

/**
 * Auth Selectors
 */
export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLogged = createSelector(selectAuthState, (auth) => !!auth.user);
