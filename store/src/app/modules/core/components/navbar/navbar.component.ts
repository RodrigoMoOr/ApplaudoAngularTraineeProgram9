import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { InfoCardComponent } from './../info-card/info-card.component';
import { AuthService } from '../../../features/auth/services/auth.service';
import { AuthState, isLogged, logout } from 'src/app/store/auth.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged$: Observable<boolean>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private store: Store<AuthState>
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
    this.navigateTo('/login');
  }

  private navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
