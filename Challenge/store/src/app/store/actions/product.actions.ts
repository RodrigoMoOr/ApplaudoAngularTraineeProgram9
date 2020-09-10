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

export const getProductsByCategory = createAction(
  '[Home Layout] Get Products By Category',
  props<{ categoryId: number }>()
);

export const getProductsByCategorySuccess = createAction(
  '[Product Effects] Get Products By Category Success',
  props<{ products: Product[] }>()
);

export const getProductsByCategoryFailure = createAction(
  '[Product Effects] Get Products By Category Failure',
  props<{ error: Error }>()
);

export const getProductBySlug = createAction(
  '[Product Details] Gett Product By ID',
  props<{ slug: string }>()
);

export const getProductByIdSuccess = createAction(
  '[Product Effects] Get Product By ID Success',
  props<{ product: Product }>()
);

export const getProductByIdFailure = createAction(
  '[Product Effects] Get Product By ID Failure',
  props<{ error: Error }>()
);

export const updateProduct = createAction(
  '[Home Page | Product Details Page] Like/Dislike Product',
  props<{ update: Update<Product> }>()
);
