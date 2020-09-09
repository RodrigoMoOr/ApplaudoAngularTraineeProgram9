import { createReducer, on, Action } from '@ngrx/store';

import * as UserStates from '../states/user.states';
import * as UserActions from '../actions/user.actions';

const appUserReducer = createReducer(
  UserStates.initialAppState,
  on(UserActions.loginSuccess, (state, { login }) => {
    return { user: login.user, token: login.token };
  }),

  on(UserActions.logout, () => {
    return { user: undefined, token: undefined };
  })
);

export function reducer(
  state: UserStates.UserState | undefined,
  action: Action
): UserStates.UserState {
  return appUserReducer(state, action);
}
