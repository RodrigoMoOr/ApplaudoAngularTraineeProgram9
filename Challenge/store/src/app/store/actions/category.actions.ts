import { Action, createAction, props } from '@ngrx/store';
import { Category } from '../reducers/category.reducers';

export const addCategories = createAction(
  '[Home Layout] Add Categories',
  props<{ categories: Category[] }>()
);
