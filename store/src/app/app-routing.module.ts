import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppGuard } from './modules/core/guards/app.guard';
import { AuthGuard } from './modules/features/auth/services/auth.guard';
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
    canActivate: [AppGuard],
  },
  {
    path: 'product/:name',
    loadChildren: () =>
      import('./modules/features/product/product.module').then(
        (module) => module.ProductModule
      ),
    canActivate: [AppGuard],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/features/cart/cart.module').then(
        (module) => module.CartModule
      ),
    canActivate: [AppGuard],
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
