import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLayoutComponent } from './components/home-layout/home-layout.component';

export const routes: Routes = [
  { path: '', component: HomeLayoutComponent },
  {
    path: 'products/:name/:id',
    component: ProductDetailsComponent,
    data: { animation: 'isRight' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
