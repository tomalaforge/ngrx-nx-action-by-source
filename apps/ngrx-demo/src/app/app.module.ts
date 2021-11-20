import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductViewModule } from '@demo/product/product-feature';
import { UserEffects, userFeature } from '@demo/user/user-state';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(userFeature),
    EffectsModule.forRoot([UserEffects]),
    ProductViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
