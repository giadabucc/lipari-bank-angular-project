import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2>💳 Conto Corrente</h2>
    <p>Saldo disponibile: <strong>€ 12.450,00</strong></p>
  `
})
export class DashboardComponent {}
