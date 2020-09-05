import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';

import * as CategoryActions from '../actions/category.actions';

export interface Category {
  id: number;
  slug: string;
  name: string;
}

export interface CategoryState extends EntityState<Category> {}

export const categoryAdapter: EntityAdapter<Category> = createEntityAdapter<
  Category
>();

const initialCategory: CategoryState = categoryAdapter.getInitialState();

const categoryReducer = createReducer(
  initialCategory,
  on(CategoryActions.addCategories, (state, action) => {
    console.log(action.categories);
    return categoryAdapter.addMany(action.categories, state);
  })
);

export function reducer(
  state: CategoryState | undefined,
  action: Action
): CategoryState {
  return categoryReducer(state, action);
}
