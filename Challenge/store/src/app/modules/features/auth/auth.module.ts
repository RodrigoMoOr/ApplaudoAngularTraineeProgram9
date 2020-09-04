import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [LoginComponent, SnackbarComponent],
  imports: [SharedModule],
})
export class AuthModule {}
