import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  getCurrentUser(): Observable<{ name: string; role: string }> {
    return of({ name: 'Giada Bucciante', role: 'admin' });
  }
}
