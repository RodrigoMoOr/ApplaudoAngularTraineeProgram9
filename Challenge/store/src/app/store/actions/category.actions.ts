import { Action, createAction, props } from '@ngrx/store';
import { Category } from '../states/category.states';

export const addCategories = createAction(
  '[Home Layout] Add Categories',
  props<{ categories: Category[] }>()
);
