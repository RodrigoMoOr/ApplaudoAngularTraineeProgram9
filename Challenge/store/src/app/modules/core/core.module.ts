import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from './services/auth.service';
import { NavbarComponent } from './compoenets/navbar/navbar.component';
import { InfoCardComponent } from './compoenets/info-card/info-card.component';

@NgModule({
  declarations: [NavbarComponent, InfoCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [NavbarComponent],
  providers: [AuthService],
  entryComponents: [InfoCardComponent],
})
export class CoreModule {}
