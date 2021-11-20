import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductEffects, productFeature } from '@demo/product/product-state';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductViewComponent } from './product-view.component';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ProductEffects]),
    StoreModule.forFeature(productFeature),
  ],
  declarations: [ProductViewComponent],
  exports: [ProductViewComponent],
})
export class ProductViewModule {}
