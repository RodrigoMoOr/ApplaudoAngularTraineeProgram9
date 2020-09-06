import { login } from 'src/app/store/actions/user.actions';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Store } from '@ngrx/store';

import { IUser } from '../interfaces/api-responses.interface';
import { UserState } from './../../../store/states/user.states';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<UserState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userExists: IUser = JSON.parse(localStorage.getItem('user'));
    if (userExists !== undefined) {
      this.store.dispatch(login({ user: userExists }));
      this.router.navigate(['/home']);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
