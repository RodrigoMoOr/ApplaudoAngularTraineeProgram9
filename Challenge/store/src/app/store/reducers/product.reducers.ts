import { createReducer, Action, on } from '@ngrx/store';

import * as ProductStates from '../states/product.states';
import * as ProductActions from '../actions/product.actions';

const productReducer = createReducer(
  ProductStates.initialProductsState,
  on(ProductActions.getAllProductsSuccess, (state, { products }) => {
    return ProductStates.productAdapter.upsertMany(products, state);
  }),

  on(ProductActions.getProductsByCategorySuccess, (state, { products }) => {
    return ProductStates.productAdapter.upsertMany(products, state);
  }),

  on(ProductActions.getProductByIdSuccess, (state, { product }) => {
    return ProductStates.productAdapter.upsertOne(product, state);
  }),

  on(ProductActions.updateProduct, (state, { update }) => {
    return ProductStates.productAdapter.updateOne(update, state);
  })
);

export function reducer(
  state: ProductStates.ProductState | undefined,
  action: Action
): ProductStates.ProductState {
  return productReducer(state, action);
}
