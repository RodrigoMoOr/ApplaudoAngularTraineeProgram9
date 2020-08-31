import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home.module.routing';
import { ProductComponent } from './components/product/product.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';

@NgModule({
  declarations: [HomeLayoutComponent, ProductComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
