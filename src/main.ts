import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// Mesclar os providers de appConfig com o provideHttpClient
bootstrapApplication(AppComponent, {
  ...appConfig,  // Inclui os providers do config
  providers: [
    ...(appConfig.providers || []),  // Adiciona os providers do appConfig
    provideHttpClient()  // Garante que o HttpClient esteja disponível
  ]
}).catch((err) => console.error(err));
