import { login } from './../../../../../store/app.store';
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
import { isLogged, AppState } from 'src/app/store/app.store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
      this.store.dispatch(login({ user: user, cart: undefined }));
      this.router.navigate(['']);
      return true;
    } else {
      return false;
    }
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   return this.store.pipe(
  //     select(isLogged),
  //     tap((logged) => {
  //       if (logged) {
  //         this.router.navigate(['']);
  //       }
  //     })
  //   );
  // }
}
