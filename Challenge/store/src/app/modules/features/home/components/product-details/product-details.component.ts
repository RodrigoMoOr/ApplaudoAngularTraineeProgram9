import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { IProduct } from '../../interfaces/products.interface';
import { ProductState } from 'src/app/store/states/product.states';
import { getProductBySlug } from 'src/app/store/actions/product.actions';
import { productById } from 'src/app/store/selectors/product.selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>
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
    /**
     * TODO: solve undefined product
     */
    this.store.select(productById, id).subscribe((product) => {
      console.log(product);
      this.product = product;
    });
  }
}
