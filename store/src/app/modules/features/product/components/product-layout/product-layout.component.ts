import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from './../../../../shared/interfaces/product-response.interface';
import { ProductsService } from './../../../../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss'],
})
export class ProductLayoutComponent implements OnInit {
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getRouteParams();
  }

  getRouteParams(): void {
    this.route.paramMap.subscribe((params) => {
      this.getProduct(params.get('name'));
    });
  }

  getProduct(slug: string) {
    this.productsService
      .getBySlug(slug, 'image_attachment.blob,category,master')
      .subscribe((response) => {
        this.product = response.data;
      });
  }
}
