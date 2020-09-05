import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

import { AuthService } from './../../../../core/services/auth.service';
import { SnackbarComponent } from './../snackbar/snackbar.component';
import { ILoginResponse } from '../../../../core/interfaces/api-responses.interface';
import { UserState } from './../../../../../store/states/app.states';
import { login } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title = 'Login to Store';

  /**
   * I prefer this way of building forms over form builder
   */
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
    private snackBar: MatSnackBar,
    private store: Store<UserState>
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      (loginRespone: ILoginResponse) => {
        if (loginRespone && loginRespone.token) {
          this.openSnackBar('Login successful');
          this.store.dispatch(login({ user: loginRespone.user }));
          this.router.navigate(['/home']);
        }
      },
      (error: HttpErrorResponse) => {
        this.openSnackBar(error.message);
      }
    );
  }

  private openSnackBar(message: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000,
    });
  }
}
