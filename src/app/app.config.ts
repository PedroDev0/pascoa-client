import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';


import { provideLottieOptions } from 'ngx-lottie';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideLottieOptions({
      player: () => import('lottie-web')
    })
  ]
};
