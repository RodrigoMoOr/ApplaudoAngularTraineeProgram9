import {
  createFeatureSelector,
  createSelector,
  Action,
  props,
} from '@ngrx/store';

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

export const productsByCategory = createSelector(
  allProducts,
  (products: ProductStates.Product[], categoryId: number) =>
    products.filter((product) => product.category.id === categoryId)
);

export const productById = createSelector(
  selectProductsState,
  (state: ProductStates.ProductState, productId: number) =>
    state.entities[productById]
);
