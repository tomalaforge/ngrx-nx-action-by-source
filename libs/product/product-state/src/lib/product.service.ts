import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of([
      {
        id: '1',
        name: 'Table',
        userId: '1',
      },
      {
        id: '2',
        name: 'TV',
        userId: '1',
      },
    ]);
  }
}
