import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

performance.mark('app_bootstrap_start');

bootstrapApplication(App, appConfig)
  .then(() => {
    performance.mark('app_bootstrap_end');
    performance.measure('app_bootstrap', 'app_bootstrap_start', 'app_bootstrap_end');
  })
  .catch((err) => console.error(err));
