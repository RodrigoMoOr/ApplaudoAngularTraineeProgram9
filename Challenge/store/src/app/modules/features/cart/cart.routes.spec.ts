import { routes } from './cart.module.routing';
import { CartComponent } from './components/cart/cart.component';

describe('Cart Routes', () => {
  it('should contain a route for login page', () => {
    expect(routes).toContain({
      path: '',
      component: CartComponent,
    });
  });
});
