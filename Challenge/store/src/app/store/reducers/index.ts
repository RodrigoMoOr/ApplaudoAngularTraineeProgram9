import * as fromUser from '../reducers/user.reducers';
import * as fromCategories from '../reducers/category.reducers';
import * as fromProducts from '../reducers/product.reducers';

export const reducers = {
  auth: fromUser.reducer,
  categories: fromCategories.reducer,
  products: fromProducts.reducer,
};
