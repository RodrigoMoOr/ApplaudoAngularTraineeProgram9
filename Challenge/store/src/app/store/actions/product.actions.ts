import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from '../states/product.states';

export const addProducts = createAction(
  '[Home Layout] Add Products',
  props<{ products: Product[] }>()
);

export const updateProduct = createAction(
  '[Home Page | Product Details Page] Update Product',
  props<{ update: Update<Product> }>()
);
