import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/features/auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/features/home/home.module').then(
        (module) => module.HomeModule
      ),
  },
  {
    path: 'product/:name',
    loadChildren: () =>
      import('./modules/features/product/product.module').then(
        (module) => module.ProductModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/features/cart/cart.module').then(
        (module) => module.CartModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
