import { Category } from './category.states';
import { Product } from './product.states';

export interface AppState {
  categories: Category[];
  products: Product[];
}

export const initialAppState: AppState = {
  categories: undefined,
  products: undefined,
};
