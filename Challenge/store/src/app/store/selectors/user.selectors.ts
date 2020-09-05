import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '../states/user.states';

export const selectAuthState = createFeatureSelector<UserState>('auth');

export const isLogged = createSelector(selectAuthState, (auth) => !!auth.user);
