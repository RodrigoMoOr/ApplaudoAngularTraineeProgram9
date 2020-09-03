import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/features/auth/components/login/login.component';
import { AuthGuard } from './modules/features/auth/services/auth.guard';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:name',
    loadChildren: () =>
      import('./modules/features/product/product.module').then(
        (module) => module.ProductModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/features/cart/cart.module').then(
        (module) => module.CartModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
