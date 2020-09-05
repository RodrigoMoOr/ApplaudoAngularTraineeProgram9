import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface Category {
  id: number;
  slug: string;
  name: string;
}

export interface CategoriesState extends EntityState<Category> {}

export const categoriesAdapter: EntityAdapter<Category> = createEntityAdapter<
  Category
>();

export const initialCategoriesState: CategoriesState = categoriesAdapter.getInitialState();
