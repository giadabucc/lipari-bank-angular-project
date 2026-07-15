import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getCurrentUser(): Observable<User> {
    return of({
      name: 'Mario Rossi',
      role: 'client',
    });
  }
}

