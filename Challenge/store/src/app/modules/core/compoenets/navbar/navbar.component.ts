import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../../services/auth.service';
import { InfoCardComponent } from '../info-card/info-card.component';

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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    // this.isLogged$ = this.store.pipe(select(isLogged));
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
    // this.store.dispatch(logout());
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {}
}
