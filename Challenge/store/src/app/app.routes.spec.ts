import { routes } from './app-routing.module';
import { LoginComponent } from './modules/features/auth/components/login/login.component';

describe('App Routes', () => {
  it('should contain a route for login page', () => {
    expect(routes).toContain({
      path: 'login',
      component: LoginComponent,
    });
  });
});
