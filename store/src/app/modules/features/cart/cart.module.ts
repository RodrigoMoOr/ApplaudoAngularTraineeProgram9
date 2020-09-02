import { CartRoutingModule } from './cart.module.routing';
import { NgModule } from '@angular/core';

import { CartLayoutComponent } from './cart-layout/cart-layout.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [CartLayoutComponent],
  imports: [SharedModule, CartRoutingModule],
})
export class CartModule {}
