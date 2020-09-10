import { ICredentials } from './../../../../core/interfaces/login-credentials.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

import { IUser } from 'src/app/modules/core/interfaces/api-responses.interface';
import { SnackbarComponent } from './../snackbar/snackbar.component';
import { UserState } from 'src/app/store/states/user.states';
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

  constructor(private snackBar: MatSnackBar, private store: Store<UserState>) {}

  ngOnInit(): void {}

  login(): void {
    const credentials: ICredentials = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };
    this.store.dispatch(login({ credentials }));
  }
}
