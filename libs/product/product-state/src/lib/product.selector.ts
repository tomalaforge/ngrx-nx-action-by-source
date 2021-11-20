import { userFeature } from '@demo/user/user-state';
import { createSelector } from '@ngrx/store';
import { ProductView } from './product.model';
import { productFeature } from './product.reducer';

export const selectProductViews = createSelector(
  productFeature.selectProducts,
  userFeature.selectUsers,
  (products, users): ProductView[] => {
    return products
      ? products.map((product) => ({
          ...product,
          user: users?.find((user) => user.id === product.userId),
        }))
      : [];
  }
);
