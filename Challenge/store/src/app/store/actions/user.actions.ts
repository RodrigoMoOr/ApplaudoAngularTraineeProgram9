import { createAction, props } from '@ngrx/store';

import { IUser } from '../../modules/core/interfaces/api-responses.interface';

export const login = createAction(
  '[Login Page] Login',
  props<{ user: IUser }>()
);

export const logout = createAction('[Info Dialog] Logout');
