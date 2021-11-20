import { Injectable } from '@angular/core';
// circular dependency -> too avoid it, set action in product action file
import * as productViewAction from '@demo/product/product-feature';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as actions from './product.actions';
import { ProductService } from './product.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productViewAction.loadProductViews),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => actions.loadProductsSuccess({ products })),
          catchError(() => of(actions.loadProductsFailure()))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
