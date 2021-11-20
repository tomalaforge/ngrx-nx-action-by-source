import { Injectable } from '@angular/core';
// circular dependency -> too avoid it, set action in product action file
import * as productViewAction from '@demo/product/product-feature';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as actions from './user.actions';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productViewAction.loadProductViews),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => actions.loadUsersSuccess({ users })),
          catchError(() => of(actions.loadUsersFailure()))
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
