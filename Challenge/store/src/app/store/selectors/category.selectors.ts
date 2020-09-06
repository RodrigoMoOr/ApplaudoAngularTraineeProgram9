import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CategoriesState } from '../states/category.states';

export const selectCategoryState = createFeatureSelector<CategoriesState>(
  'categories'
);

export const categories = createSelector(
  selectCategoryState,
  (categories) => categories.entities
);
