import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from './../../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [LoginComponent, SnackbarComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
})
export class AuthModule {}
