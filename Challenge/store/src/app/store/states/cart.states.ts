import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface Cart {
  userId: number;
  items: [];
}
