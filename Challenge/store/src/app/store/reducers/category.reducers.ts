import { createReducer, Action, on } from '@ngrx/store';

import * as CategoryStates from '../states/category.states';
import * as CategoryActions from '../actions/category.actions';

const categoryReducer = createReducer(
  CategoryStates.initialCategoryState,

  on(CategoryActions.getAllCategoriesSuccess, (state, { categories }) => {
    return CategoryStates.categoryAdapter.upsertMany(categories, state);
  })
);

export function reducer(
  state: CategoryStates.CategoryState | undefined,
  action: Action
): CategoryStates.CategoryState {
  return categoryReducer(state, action);
}
