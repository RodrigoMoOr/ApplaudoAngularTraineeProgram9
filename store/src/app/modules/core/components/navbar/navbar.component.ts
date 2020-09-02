import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { InfoCardComponent } from './../info-card/info-card.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

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
    this.authService.logout();
    this.navigateTo('/login');
  }

  private navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
