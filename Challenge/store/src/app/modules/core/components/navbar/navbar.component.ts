import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';

import { InfoCardComponent } from '../info-card/info-card.component';
import { UserState } from 'src/app/store/states/user.states';
import { isLogged } from 'src/app/store/selectors/user.selectors';
import { logout } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged$: Observable<boolean>;

  constructor(
    private dialog: MatDialog,
    private navbarService: NavbarService,
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
      .subscribe((result: boolean) => {
        if (result) {
          this.logout();
        }
      });
  }

  onSidenavToggle(): void {
    this.navbarService.toggle();
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
