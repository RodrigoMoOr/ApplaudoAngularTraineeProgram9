import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from '../states/product.states';

export const getAllProducts = createAction('[Home Layout] Get All Products');

export const getAllProductsSuccess = createAction(
  '[Product Effects] Get All Products Success',
  props<{ products: Product[] }>()
);

export const getAllProductsFailure = createAction(
  '[Product Effects] Get All Products Failure',
  props<{ error: Error }>()
);

export const updateProduct = createAction(
  '[Home Page | Product Details Page] Like/Dislike Product',
  props<{ update: Update<Product> }>()
);
