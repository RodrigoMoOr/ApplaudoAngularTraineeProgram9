import { createReducer, Action, on } from '@ngrx/store';

import * as ProductStates from '../states/product.states';
import * as ProductActions from '../actions/product.actions';

const productReducer = createReducer(
  ProductStates.initialProductsState,
  on(ProductActions.addProducts, (state, action) => {
    return ProductStates.productsAdapter.addMany(action.products, state);
  })
);

export function reducer(
  state: ProductStates.ProductsState | undefined,
  action: Action
): ProductStates.ProductsState {
  return productReducer(state, action);
}
