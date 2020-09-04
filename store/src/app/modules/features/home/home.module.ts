import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home.module.routing';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [HomeLayoutComponent, ProductComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
