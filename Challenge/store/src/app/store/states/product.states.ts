import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  likes_up_count: number;
  likes_down_count: number;
  published_at: string;
  category: {
    id: number;
    slug: string;
    name: string;
  };
  image: {
    id: number;
    url: string;
  };
  master: {
    price: string;
    promotional_price: string;
    stock: number;
  };
}

export interface ProductState extends EntityState<Product> {
  filteredIds: number[];
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<
  Product
>();

export const initialProductsState: ProductState = productAdapter.getInitialState(
  {
    filteredIds: [],
  }
);
