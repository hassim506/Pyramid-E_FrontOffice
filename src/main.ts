// import 'zone.js';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// ...existing code...
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './app/interceptors/interceptor';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig?.providers ?? []),
    provideHttpClient(withInterceptors([AuthInterceptor]))
  ]
}).catch((err) => console.error(err));
