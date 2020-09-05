import { createReducer, on, Action } from '@ngrx/store';

import * as UserStates from '../states/user.states';
import * as UserActions from '../actions/user.actions';

const appUserReducer = createReducer(
  UserStates.initialAppState,
  on(UserActions.login, (state, action) => {
    return { user: action.user };
  }),

  on(UserActions.logout, () => {
    return { user: undefined, cart: undefined };
  })
);

export function reducer(
  state: UserStates.UserState | undefined,
  action: Action
): UserStates.UserState {
  return appUserReducer(state, action);
}
