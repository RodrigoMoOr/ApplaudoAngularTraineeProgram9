import { loginSuccess } from './../../../store/actions/user.actions';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { IUser } from '../interfaces/api-responses.interface';
import { UserState } from './../../../store/states/user.states';
import { isLogged } from './../../../store/selectors/user.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<UserState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const userExists: IUser = JSON.parse(localStorage.getItem('user'));
    const tokenExist: string = JSON.parse(localStorage.getItem('token'));
    if (userExists !== null) {
      this.store.dispatch(
        loginSuccess({
          login: {
            user: userExists,
            token: tokenExist,
          },
        })
      );
      return this.store.pipe(
        select(isLogged),
        tap((logged) => {
          if (logged) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/login']);
          }
        })
      );
    }
  }
}
