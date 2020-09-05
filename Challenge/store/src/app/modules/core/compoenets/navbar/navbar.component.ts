import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';

import { AuthService } from '../../services/auth.service';
import { InfoCardComponent } from '../info-card/info-card.component';
import { UserState } from '../../../../store/states/user.states';
import { isLogged } from '../../../../store/selectors/user.selectors';
import { logout } from '../../../../store/actions/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLogged$: Observable<boolean>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private store: Store<UserState>
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.isLogged$ = this.store.pipe(select(isLogged));
  }

  openDialog(): void {
    this.dialog
      .open(InfoCardComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.logout();
        }
      });
  }

  logout(): void {
    this.store.dispatch(logout());
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {}
}
