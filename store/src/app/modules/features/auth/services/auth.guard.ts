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
import { isLogged, AuthState } from 'src/app/store/auth.store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AuthState>, private router: Router) {}

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
