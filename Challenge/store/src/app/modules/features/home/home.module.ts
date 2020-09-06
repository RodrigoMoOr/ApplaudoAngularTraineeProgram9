import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home.module.routing';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TokenInterceptorService } from './../../shared/interceptors/interceptor.service';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [SharedModule, HomeRoutingModule, MatListModule, MatSidenavModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class HomeModule {}
