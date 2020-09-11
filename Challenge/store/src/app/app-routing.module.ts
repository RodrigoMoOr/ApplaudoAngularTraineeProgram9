import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/features/auth/components/login/login.component';
import { AppGuard } from './modules/core/guards/app.guard';
import { AuthGuard } from './modules/core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard], // Doesn't work properly
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/features/home/home.module').then((m) => m.HomeModule),
    canActivate: [AppGuard],
    data: { animation: 'isLeft' },
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/features/cart/cart.module').then((m) => m.CartModule),
    canActivate: [AppGuard],
    data: { aniamtion: 'isRight' },
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
