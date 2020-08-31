import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/features/auth/auth.module').then(
        (module) => module.AuthModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/features/home/home.module').then(
        (module) => module.HomeModule
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
