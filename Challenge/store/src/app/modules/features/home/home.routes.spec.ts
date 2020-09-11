import { routes } from './home.module.routing';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

describe('Home Routes', () => {
  it('should contain a route for home page', () => {
    expect(routes).toContain({ path: '', component: HomeLayoutComponent });
  });

  it('should contain a route for product details page', () => {
    expect(routes).toContain({
      path: 'products/:name/:id',
      component: ProductDetailsComponent,
    });
  });
});
