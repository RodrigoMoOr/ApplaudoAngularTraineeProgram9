import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { NgModule } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

import { LoginComponent } from './login.component';
import { SnackbarComponent } from './../snackbar/snackbar.component';

let loader: HarnessLoader;

const TEST_DIRECTIVES = [SnackbarComponent];

@NgModule({
  imports: [MatSnackBarModule, MatInputModule, MatFormFieldModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [SnackbarComponent],
})
class SnackBarTestModule {}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  const initialState = { user: '', token: '' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [MatSnackBar, provideMockStore({ initialState })],
      imports: [SnackBarTestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should have 2 inputs', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should validate form for any given input', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should have a login button', async () => {
    const button = await loader.getHarness(MatButtonHarness);

    expect(button).toBeTruthy();
  });

  it('should call login() when login button is clicked', async () => {
    spyOn(component, 'login');

    fixture.debugElement
      .query(By.css('form'))
      .triggerEventHandler('ngSubmit', null);

    expect(component.login).toHaveBeenCalled();
  });

  it('should dispatch login action when calling login()', () => {
    spyOn(store, 'dispatch');

    component.login();

    expect(store.dispatch).toHaveBeenCalled();
  });
});
