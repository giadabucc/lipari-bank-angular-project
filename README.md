# Lipari Bank Dashboard (Angular 19 - Standalone)

Piccolo progetto didattico Angular 19 standalone con Signals, routing e layout a shell per simulare un dashboard bancario.

## Requisiti

- Node.js recente (>= 18 consigliato)
- npm

## Installazione & Avvio

1. Installa le dipendenze:

   ```bash
   npm install
   ```

2. Avvia il server di sviluppo:

   ```bash
   npx ng serve
   ```

   oppure, se hai Angular CLI globale:

   ```bash
   ng serve
   ```

L'applicazione sarà disponibile (di default) su `http://localhost:4200`.

## Struttura principale

- `src/app/app.component.*`: AppShell con header, sidebar e `<router-outlet>`.
- `src/app/core/layout/header`: header con pulsante Logout.
- `src/app/core/layout/sidebar`: sidebar con voci di menu.
- `src/app/core/services/user.service.ts`: servizio utente che espone `getCurrentUser()`.
- `src/app/features/dashboard/dashboard.component.ts`: dashboard minimale.
- `src/app/app.routes.ts`: definizione delle route principali.
- `src/main.ts`: bootstrap dell'applicazione standalone.

## 🐛 3 MISSIONI DI DEBUG

Nel progetto sono stati inseriti **3 bug intenzionali** per esercitarti nel debug di un'app Angular standalone con Signals e Router.

### MISSIONE 1

> **Problema:** "Il pulsante Logout è sempre visibile anche senza login."

### MISSIONE 2

> **Problema:** "La navigazione non funziona e c'è un NullInjectorError in console."

### MISSIONE 3

> **Problema:** "Le voci di menu della Sidebar non navigano. C'è un errore 'Can't bind to routerLink'."

---

## Bonus Mission — Feature da Implementare (opzionale, ~1 ora)

Una volta risolti i 3 bug, implementa la seguente feature per consolidare i concetti del giorno.

### Segnalatore di route attiva nella Sidebar

La sidebar mostra le voci di menu ma non fornisce nessun feedback visivo su quale sezione sia attualmente aperta. L'utente non riesce a capire dove si trova nell'applicazione.

**Cosa implementare:**

Aggiungi alla `SidebarComponent` un indicatore visivo che evidenzi la voce di menu corrispondente alla route attiva corrente. Ogni voce deve avere uno stile distinto quando la route che rappresenta è quella attiva (o un suo prefisso).

La logica di rilevamento della route attiva deve usare un `Signal` derivato dalla navigazione del Router — non deve risiedere nel template con sole direttive.

Collega il tutto al servizio `UserService` esistente: le voci di menu devono essere visibili solo quando l'utente è considerato autenticato. Se il segnale di autenticazione è falso, la sidebar non deve mostrare nessuna voce.

**Criteri di accettazione:**

- La voce di menu della route corrente ha un aspetto visivamente diverso dalle altre.
- Navigando tra le route, l'indicatore si aggiorna automaticamente senza ricaricare la pagina.
- Se l'utente non è autenticato, nessuna voce di menu è visibile nella sidebar.
- Il rilevamento della route attiva è implementato con un Signal nel componente, non solo tramite attributi del template.
- Nessun bug esistente viene reintrodotto o aggirato.

---

*LipariBank Prompt Bootcamp — Modern Architecture & Advanced Debugging — Day 01*
