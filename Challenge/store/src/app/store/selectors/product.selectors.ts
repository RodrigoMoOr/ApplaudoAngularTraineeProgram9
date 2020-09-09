import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as ProductStates from '../states/product.states';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = ProductStates.productAdapter.getSelectors();

export const selectProductsState = createFeatureSelector<
  ProductStates.ProductState
>('products');

export const allProducts = createSelector(selectProductsState, selectAll);
