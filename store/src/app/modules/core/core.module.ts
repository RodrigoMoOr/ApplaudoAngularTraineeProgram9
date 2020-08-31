import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [BrowserModule, RouterModule, HttpClientModule],
  providers: [AuthService],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class CoreModule {}
