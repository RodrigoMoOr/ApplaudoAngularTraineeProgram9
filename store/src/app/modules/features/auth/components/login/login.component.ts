import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../common/services/auth.service';
import { ILoginResponse } from '../../common/interfaces/api-responses.interface';
import { SnackbarComponent } from '../../../../shared/components/snackbar/snackbar.component';

import { Store } from '@ngrx/store';
import { AppState, login } from './../../../../../store/app.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title = 'Login to Store';

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^([a-zd.-]+)@([a-zd-]+).([a-z]{2,8})(.[a-z]{2,8})?$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (loginRespone: ILoginResponse) => {
        if (loginRespone && loginRespone.token) {
          this.openSnackbar('Login successful');
          this.store.dispatch(
            login({ user: loginRespone.user, cart: undefined })
          );
          this.navigateTo('');
        }
      },
      (error: HttpErrorResponse) => {
        this.openSnackbar(error.message);
      }
    );
  }

  private navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  private openSnackbar(message: string): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000,
    });
  }
}
