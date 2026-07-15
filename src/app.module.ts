// app.module.ts (Angular < 16)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent, // Componenti devono essere dichiarati qui
    HeaderComponent
  ],
  imports: [
    BrowserModule, // Fornisce CommonModule e altre funzionalità base
    // Altri moduli importati qui
  ],
  providers: [
    // Servizi globali qui
  ],
  bootstrap: [AppComponent] // Componente root da avviare
})
export class AppModule { }

// main.ts (Angular < 16)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
