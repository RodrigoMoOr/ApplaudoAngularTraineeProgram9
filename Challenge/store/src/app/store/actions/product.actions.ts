import { createAction, props } from '@ngrx/store';
import { Product } from '../states/product.states';

export const addProducts = createAction(
  '[Home Layout] Add Products',
  props<{ products: Product[] }>()
);
