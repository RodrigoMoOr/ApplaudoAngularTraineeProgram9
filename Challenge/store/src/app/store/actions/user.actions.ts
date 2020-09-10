import { createAction, props } from '@ngrx/store';

import { ICredentials } from './../../modules/core/interfaces/login-credentials.interface';
import { ILoginResponse } from './../../modules/core/interfaces/api-responses.interface';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: ICredentials }>()
);

export const loginSuccess = createAction(
  '[Auth Service] Login Success',
  props<{ login: ILoginResponse }>()
);

export const loginFailure = createAction(
  '[Auth Service] Login Failure',
  props<{ error: Error }>()
);

export const logout = createAction('[Navbar] Logout');
