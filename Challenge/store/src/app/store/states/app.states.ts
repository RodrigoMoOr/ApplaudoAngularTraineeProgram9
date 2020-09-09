import { CategoryState } from './category.states';
import { ProductState } from './product.states';

export interface AppState {
  categories: CategoryState;
  products: ProductState;
}

export const initialAppState: AppState = {
  categories: undefined, // If these don't work use initial states for each
  products: undefined, // If these don't work use initial states for each
};
