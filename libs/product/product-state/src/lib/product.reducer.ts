import { createFeature, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from './product.model';

export interface ProductState {
  products: Product[] | undefined;
}

export const initialState: ProductState = {
  products: undefined,
};

const reducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  }))
);

export const productFeature = createFeature({
  name: 'product',
  reducer,
});
