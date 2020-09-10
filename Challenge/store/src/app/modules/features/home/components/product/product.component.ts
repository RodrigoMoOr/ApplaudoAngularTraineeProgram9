import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { IProduct } from './../../interfaces/products.interface';
import { ProductState } from 'src/app/store/states/product.states';
import { updateProduct } from 'src/app/store/actions/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private store: Store<ProductState>) {}

  ngOnInit(): void {}

  likeProduct(kind: string): void {
    this.store.dispatch(updateProduct({ productId: this.product.id, kind }));
  }
}
