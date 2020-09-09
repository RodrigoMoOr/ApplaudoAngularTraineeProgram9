import { createAction, props } from '@ngrx/store';

import { Category } from './../states/category.states';

export const getAllCategories = createAction(
  '[Home Layout] Get All Categories'
);

export const getAllCategoriesSuccess = createAction(
  '[Category Effects] Get All Categories Success',
  props<{ categories: Category[] }>()
);

export const getAllCategoriesFailure = createAction(
  '[Category Effects] Get All Categories Failure',
  props<{ error: Error }>()
);
