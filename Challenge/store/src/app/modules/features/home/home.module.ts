import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home.module.routing';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [SharedModule, HomeRoutingModule, MatListModule, MatSidenavModule],
})
export class HomeModule {}
