import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from '../states/product.states';

export const selectProductState = createFeatureSelector<ProductsState>(
  'products'
);

export const products = createSelector(
  selectProductState,
  (products) => products.entities
);
