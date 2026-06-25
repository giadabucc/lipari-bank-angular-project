// app/core/layout/header/header.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // RouterLink: direttiva per navigazione dichiarativa

@Component({
  selector: 'app-header',
  standalone: true,
  // RouterLink DEVE essere importato esplicitamente in ogni componente standalone
  // che usa [routerLink] nel template — non è sufficiente avere provideRouter() in main.ts
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // @Input: proprietà che il componente riceve dal padre
  // Permette la comunicazione padre → figlio
  // Il decorator @Input() è ancora supportato, ma Angular 17+ supporta anche
  // input() come funzione (vedremo nel Giorno 3)
  @Input() isAuthenticated: boolean = false;

  // @Output: EventEmitter che emette eventi al componente padre
  // Permette la comunicazione figlio → padre
  // Il padre può ascoltare tramite event binding: (logout)="handleLogout()"
  @Output() logout = new EventEmitter<void>();

  // Metodo chiamato quando l'utente clicca sul pulsante logout
  // Event binding nel template: (click)="onLogout()"
  onLogout(): void {
    // Emette l'evento al componente padre
    // Il padre può reagire a questo evento (es. chiamare authService.logout())
    this.logout.emit();
  }
}
