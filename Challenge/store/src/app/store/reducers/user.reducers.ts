import { createReducer, on, Action } from '@ngrx/store';

import { initialAppState, UserState } from '../states/app.states';
import { login, logout } from '../actions/user.actions';

const appUserReducer = createReducer(
  initialAppState,
  on(login, (state, action) => {
    return { user: action.user };
  }),

  on(logout, () => {
    return { user: undefined, cart: undefined };
  })
);

export function reducer(
  state: UserState | undefined,
  action: Action
): UserState {
  return appUserReducer(state, action);
}
