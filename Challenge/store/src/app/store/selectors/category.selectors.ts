import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CategoryState } from '../states/category.states';

export const selectCategoryStates = createFeatureSelector<CategoryState>(
  'categories'
);

export const categories = createSelector(
  selectCategoryStates,
  (categories) => categories.entities
);
