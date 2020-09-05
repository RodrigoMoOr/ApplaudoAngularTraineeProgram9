import { Injectable } from '@angular/core';

import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private sideNav: MatSidenav;

  setSidenav(sideNav: MatSidenav): void {
    this.sideNav = sideNav;
  }

  open(): Promise<MatDrawerToggleResult> {
    return this.sideNav.open();
  }

  close(): Promise<MatDrawerToggleResult> {
    return this.sideNav.close();
  }

  toggle(): void {
    this.sideNav.toggle();
  }
}
