import { CartRoutingModule } from './cart.module.routing';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [SharedModule, CartRoutingModule],
})
export class CartModule {}
