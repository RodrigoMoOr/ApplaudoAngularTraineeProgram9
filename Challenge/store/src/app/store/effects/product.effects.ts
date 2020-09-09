import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { ProductsService } from '../../modules/features/home/services/products.service';
import * as ProductActions from '../actions/product.actions';
import { Product } from './../states/product.states';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  getAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getAllProducts),
      switchMap(() =>
        this.productsService.getAllProducts().pipe(
          catchError((error) =>
            of(ProductActions.getAllProductsFailure(error))
          ),
          map((products: Product[]) => {
            return ProductActions.getAllProductsSuccess({ products });
          })
        )
      )
    )
  );
}
