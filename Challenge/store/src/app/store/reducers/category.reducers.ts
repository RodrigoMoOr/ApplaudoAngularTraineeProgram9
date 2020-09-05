import { createReducer, Action, on } from '@ngrx/store';

import * as CategoryStates from '../states/category.states';
import * as CategoryActions from '../actions/category.actions';

const categoryReducer = createReducer(
  CategoryStates.initialCategoriesState,
  on(CategoryActions.addCategories, (state, action) => {
    return CategoryStates.categoriesAdapter.addMany(action.categories, state);
  })
);

export function reducer(
  state: CategoryStates.CategoriesState | undefined,
  action: Action
): CategoryStates.CategoriesState {
  return categoryReducer(state, action);
}
