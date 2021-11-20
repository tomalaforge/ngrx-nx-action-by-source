import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    return of([
      {
        id: '1',
        name: 'Tom',
      },
      {
        id: '2',
        name: 'Hugo',
      },
    ]);
  }
}
