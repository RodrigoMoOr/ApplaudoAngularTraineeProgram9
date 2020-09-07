import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from '../states/product.states';
import * as fromProducts from '../reducers/product.reducers';

export const selectProductsState = createFeatureSelector<ProductsState>(
  'products'
);

export const selectProductIds = createSelector(
  selectProductsState,
  fromProducts.selectProductIds
);

export const selectProductEntities = createSelector(
  selectProductsState,
  fromProducts.selectProductEntities
);

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAllProducts
);

export const selectProductsTotal = createSelector(
  selectProductsState,
  fromProducts.selectProductsTotal
);
