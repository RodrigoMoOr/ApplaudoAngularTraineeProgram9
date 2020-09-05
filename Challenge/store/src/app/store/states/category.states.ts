import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface Category {
  id: number;
  slug: string;
  name: string;
}

export interface CategoryState extends EntityState<Category> {}

export const categoryAdapter: EntityAdapter<Category> = createEntityAdapter<
  Category
>();

export const initialCategory: CategoryState = categoryAdapter.getInitialState();
