import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card">
      <h1 class="card__title">Dashboard</h1>
      <p class="card__subtitle">
        Benvenuto nella tua area personale Lipari Bank.
      </p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}

