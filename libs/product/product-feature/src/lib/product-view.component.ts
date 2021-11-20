import { Component, OnInit } from '@angular/core';
import { selectProductViews } from '@demo/product/product-state';
import { Store } from '@ngrx/store';
import { loadProductViews } from '..';

@Component({
  selector: 'demo-product',
  template: `
    <div *ngFor="let product of productViews$ | async">
      {{ product.name }} {{ product.user?.name ?? 'User not loaded' }}
    </div>
  `,
  styles: [],
})
export class ProductViewComponent implements OnInit {
  productViews$ = this.store.select(selectProductViews);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProductViews());
  }
}
