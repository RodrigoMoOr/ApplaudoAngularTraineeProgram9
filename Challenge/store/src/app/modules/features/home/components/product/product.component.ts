import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { IProduct } from './../../interfaces/products.interface';
import { ProductState } from 'src/app/store/states/product.states';
import { updateProduct } from 'src/app/store/actions/product.actions';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private store: Store<ProductState>, private dialog: MatDialog) {}

  ngOnInit(): void {}

  updateProduct(kind: string): void {
    this.store.dispatch(updateProduct({ productId: this.product.id, kind }));
  }

  openAddToCartDialog(): void {
    this.dialog.open(AddToCartComponent, { data: { product: this.product } });
  }
}
