import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this module


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),  // Optional: Improve performance by reducing change detection cycles
    provideRouter(routes),  // Provide router configuration
    provideHttpClient(),
    ButtonModule,
    InputTextModule,
    importProvidersFrom(BrowserAnimationsModule)
  ]
};
