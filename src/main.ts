// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Bootstrap dell'applicazione standalone
// bootstrapApplication crea un'istanza dell'app e configura l'injector root
bootstrapApplication(AppComponent, {
  providers: [
    // provideRouter configura il sistema di routing
    // routes è un array di Route objects definito in app.routes.ts
    provideRouter(routes),

    // provideHttpClient abilita HttpClient per chiamate HTTP
    // Essenziale per integrazioni REST in applicazioni enterprise
    provideHttpClient(),

    // Altri provider possono essere aggiunti qui
    // Es: provideStore() per NgRx, provideEnvironmentProviders() per config
  ],
}).catch((err) => console.error('Bootstrap failed:', err));
// Gestione errori durante il bootstrap: se fallisce, l'app non si avvia
// In produzione, potresti voler loggare su un servizio di monitoring (es. Sentry)
