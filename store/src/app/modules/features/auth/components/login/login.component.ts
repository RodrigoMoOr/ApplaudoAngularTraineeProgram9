import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ILoginResponse } from '../../interfaces/api-responses.interface';

import { Store } from '@ngrx/store';
import { AppState } from './../../../../../store/reducers/index';
import { login } from './../../../../../store/actions/login.actions';

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
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authService
      .login(this.loginForm.value)
      .subscribe((loginRespone: ILoginResponse) => {
        if (loginRespone && loginRespone.token) {
          this.store.dispatch(login(loginRespone.user));
          this.navigateTo('');
        }
      });
  }

  private navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
