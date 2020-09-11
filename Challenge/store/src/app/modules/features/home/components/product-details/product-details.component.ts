import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { IProduct } from '../../interfaces/products.interface';
import { ProductState } from 'src/app/store/states/product.states';
import {
  getProductBySlug,
  updateProduct,
} from 'src/app/store/actions/product.actions';
import { productById } from 'src/app/store/selectors/product.selectors';
import { Observable, BehaviorSubject } from 'rxjs';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<IProduct>;
  productSubject = new BehaviorSubject<IProduct>(null);

  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getRouteParams();
  }

  getRouteParams(): void {
    this.route.paramMap.subscribe((params) => {
      this.getProduct(params.get('name'), +params.get('id'));
    });
  }

  getProduct(slug: string, id: number): void {
    this.store.dispatch(getProductBySlug({ slug }));
    this.product$ = this.store.select(productById, id);
    this.product$.subscribe((product) => {
      this.productSubject.next(product);
    });
  }

  updateProduct(kind: string): void {
    this.store.dispatch(
      updateProduct({ productId: this.productSubject.value.id, kind })
    );
  }

  openAddToCartDialog(): void {
    this.dialog.open(AddToCartComponent, {
      data: { product: this.productSubject.value.name },
    });
  }
}
