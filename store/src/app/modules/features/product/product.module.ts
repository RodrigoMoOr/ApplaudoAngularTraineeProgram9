import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ProductRoutingModule } from './product.module.routing';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';

@NgModule({
  declarations: [ProductLayoutComponent],
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
