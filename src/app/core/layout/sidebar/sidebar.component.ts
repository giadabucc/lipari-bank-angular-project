// app/core/layout/sidebar/sidebar.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
// RouterLinkActive: aggiunge una classe CSS al link quando la sua route è attiva
// Essenziale per evidenziare la voce di menu corrente nella sidebar

interface MenuItem {
  label: string;
  route: string;
  icon: string; // es. '💳', '📈', '🛡️'
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="sidebar">
      <div class="user-info">
        <!-- Interpolation: visualizza il valore della proprietà TypeScript nel DOM -->
        <p class="user-name">{{ userName }}</p>
      </div>
      <ul class="menu-list">
        <!-- @for: control flow moderno (Angular 17+) — sostituisce *ngFor -->
        <!-- track item.route: ottimizzazione per il reconciliation del DOM -->
        @for (item of menuItems; track item.route) {
          <li class="menu-item">
            <!-- [routerLink]: property binding sulla direttiva RouterLink -->
            <!-- routerLinkActive: aggiunge la classe 'active' quando la route è attiva -->
            <a
              [routerLink]="item.route"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="menu-link">
              <span class="menu-icon">{{ item.icon }}</span>
              <span class="menu-label">{{ item.label }}</span>
            </a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: [`
    .sidebar {
      width: 240px;
      background: #1a237e;
      color: white;
      padding: 16px 0;
      display: flex;
      flex-direction: column;
    }
    .user-info { padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); }
    .user-name { font-weight: bold; margin: 0; }
    .menu-list { list-style: none; padding: 0; margin: 8px 0; }
    .menu-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      transition: background 0.2s, color 0.2s;
    }
    /* La classe 'active' viene aggiunta da RouterLinkActive quando la route è attiva */
    .menu-link.active,
    .menu-link:hover { background: rgba(255,255,255,0.1); color: white; }
  `]
})
export class SidebarComponent {
  @Input() userName: string = 'Guest';

  // Le voci di menu sono definite come proprietà del componente, non hardcoded nel template
  // In un'app reale, potrebbero arrivare da un servizio (con permessi basati sul ruolo utente)
  readonly menuItems: MenuItem[] = [
    { label: 'Conto Corrente', route: '/dashboard', icon: '💳' },
    { label: 'Investimenti',   route: '/investimenti', icon: '📈' },
    { label: 'Polizze',        route: '/polizze', icon: '🛡️' },
    { label: 'Amministrazione', route: '/admin', icon: '⚙️' },
  ];
}
