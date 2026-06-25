// app/app.component.ts
import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true, // Componente standalone: dichiara le proprie dipendenze
  imports: [
    CommonModule, // Fornisce direttive comuni (*ngIf, *ngFor, date pipe, ecc.)
    RouterOutlet, // Placeholder per il contenuto delle route
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  // styleUrl (singolare, Angular 17+): per un singolo file SCSS non serve l'array
  // styleUrls: ['./app.component.scss'] — vecchia sintassi, ancora supportata ma verbosa
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  // Signal per lo stato dell'utente (reattività fine-grained)
  // Signal è una primitiva reattiva introdotta in Angular 16
  // Wrappa un valore e notifica automaticamente i consumer quando cambia
  private userState = signal<{ name: string; role: string } | null>(null);

  // Computed signal: valore derivato che si aggiorna automaticamente
  // quando userState cambia. Più performante di un getter che viene
  // ricalcolato ad ogni change detection
  isAuthenticated = computed(() => this.userState() !== null);
  userName = computed(() => this.userState()?.name ?? 'Guest');

  // Dependency Injection tramite constructor injection
  // Angular risolve UserService dall'injector e lo inietta
  constructor(private userService: UserService) {}

  // Lifecycle hook: chiamato dopo che Angular ha inizializzato
  // le proprietà data-bound del componente (dopo il primo ngOnChanges)
  // Usato per logica di inizializzazione che richiede le proprietà input
  ngOnInit(): void {
    console.log('AppComponent initialized');

    // Esempio di subscription a un observable (vedremo RxJS in dettaglio nel Giorno 4)
    // Per ora, notiamo che dobbiamo gestire la subscription per evitare memory leak
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        // Aggiornamento del signal: triggera automaticamente il change detection
        // per tutti i computed che dipendono da userState
        this.userState.set(user);
      },
      error: (err) => {
        console.error('Failed to load user:', err);
        // In produzione, potresti voler mostrare un toast di errore
      }
    });
  }

  // Lifecycle hook: chiamato prima che Angular distrugga il componente
  // Essenziale per pulire risorse: unsubscribe, clearInterval, removeEventListener
  // Previene memory leak in applicazioni SPA dove i componenti vengono creati/distrutti
  ngOnDestroy(): void {
    console.log('AppComponent destroyed');
    // Nota: in questo esempio, se userService.getCurrentUser() restituisce
    // un observable che non completa automaticamente, dovremmo salvare la subscription
    // e fare unsubscribe qui. Vedremo come gestirlo meglio con takeUntil nel Giorno 4
  }
}