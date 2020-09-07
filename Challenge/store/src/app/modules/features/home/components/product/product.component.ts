import { updateProduct } from './../../../../../store/actions/product.actions';
import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { IProduct } from './../../interfaces/products.interface';
import { ProductsService } from './../../services/products.service';
import { IAPIResponse } from '../../interfaces/api-response.interface';
import { ProductsState } from 'src/app/store/states/product.states';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  constructor(
    private productsService: ProductsService,
    private store: Store<ProductsState>
  ) {}

  ngOnInit(): void {}

  likeProduct(kind: string): void {
    this.productsService
      .postLikeToProduct(this.product.id, kind)
      .subscribe((likeResponse: IAPIResponse) => {
        console.log(likeResponse);
      });
  }
}
