import { createAction, props } from '@ngrx/store';

import { User } from '../states/user.states';

export const login = createAction(
  '[Login Page] Login',
  props<{ user: User }>()
);

export const logout = createAction('[Info Dialog] Logout');
