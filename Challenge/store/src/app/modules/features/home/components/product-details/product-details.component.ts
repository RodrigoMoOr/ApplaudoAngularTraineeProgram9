import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    // this.getRouteParams();
  }

  // getRouteParams(): void {
  //   this.route.paramMap.subscribe((params) => {
  //     this.getProduct(params.get('name'));
  //   });
  // }

  // getProduct(slug: string): void {
  //   this.productsService
  //     .getBySlug(slug, 'image_attachment.blob,category,master')
  //     .subscribe((response) => {
  //       this.product = response.data;
  //     });
  // }
}
