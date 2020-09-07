import { createReducer, Action, on, State } from '@ngrx/store';

import * as ProductStates from '../states/product.states';
import * as ProductActions from '../actions/product.actions';

const productReducer = createReducer(
  ProductStates.initialProductsState,
  on(ProductActions.addProducts, (state, { products }) => {
    return ProductStates.productsAdapter.addMany(products, state);
  }),

  on(ProductActions.updateProduct, (state, { update }) => {
    return ProductStates.productsAdapter.updateOne(update, state);
  })
);

export function reducer(
  state: ProductStates.ProductsState | undefined,
  action: Action
): ProductStates.ProductsState {
  return productReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = ProductStates.productsAdapter.getSelectors();

export const selectProductIds = selectIds;

export const selectProductEntities = selectEntities;

export const selectAllProducts = selectAll;

export const selectProductsTotal = selectTotal;
