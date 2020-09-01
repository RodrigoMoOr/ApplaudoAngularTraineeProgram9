import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home.module.routing';
import { ProductComponent } from './components/product/product.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [HomeLayoutComponent, ProductComponent],
  imports: [SharedModule, HomeRoutingModule],
  providers: [CategoriesService, ProductsService],
})
export class HomeModule {}
