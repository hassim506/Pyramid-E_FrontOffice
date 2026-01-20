import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { register as registerSwiper } from 'swiper/element';
import { AuthInterceptor } from './interceptors/interceptor';
registerSwiper();
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    BsDatepickerModule.forRoot().providers!,
    provideAnimations(),
    provideHttpClient(
      withInterceptors([AuthInterceptor])
    )
  ],

};
