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

import { UserState } from './../../../store/states/user.states';
import { isLogged } from './../../../store/selectors/user.selectors';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private store: Store<UserState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(isLogged),
      tap((logged) => {
        if (!logged) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
