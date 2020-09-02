import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductLayoutComponent } from './components/product-layout/product-layout.component';

const routes: Routes = [{ path: '', component: ProductLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
