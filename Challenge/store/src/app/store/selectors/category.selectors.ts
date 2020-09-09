import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as CategoryStates from '../states/category.states';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = CategoryStates.categoryAdapter.getSelectors();

export const selectCategoryIds = selectIds;

export const selectCategoryEntities = selectEntities;

export const selectAllCategories = selectAll;

export const selectCategorysTotal = selectTotal;

export const selectCategoryState = createFeatureSelector<
  CategoryStates.CategoryState
>('categories');

export const allCategories = createSelector(selectCategoryState, selectAll);
