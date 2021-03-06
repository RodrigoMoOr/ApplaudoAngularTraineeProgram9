import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from './services/auth.service';
import { NavbarService } from './services/navbar.service';
import { AppGuard } from './guards/app.guard';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { TokenInterceptorService } from './../shared/interceptors/app.interceptor';

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
  providers: [
    AuthService,
    NavbarService,
    AppGuard,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  entryComponents: [InfoCardComponent],
})
export class CoreModule {}
