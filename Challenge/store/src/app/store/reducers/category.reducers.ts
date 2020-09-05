import { createReducer, Action, on } from '@ngrx/store';

import * as CategoryStates from '../states/category.states';
import * as CategoryActions from '../actions/category.actions';

const categoryReducer = createReducer(
  CategoryStates.initialCategory,
  on(CategoryActions.addCategories, (state, action) => {
    return CategoryStates.categoryAdapter.addMany(action.categories, state);
  })
);

export function reducer(
  state: CategoryStates.CategoryState | undefined,
  action: Action
): CategoryStates.CategoryState {
  return categoryReducer(state, action);
}
