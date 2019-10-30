import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

  if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
      console.log("active service worker found, no need to register");
    } else {
      // Register the service worker
      navigator.serviceWorker
        .register("sw.js", {
          scope: "./"
        })
        .then(function (reg) {
          console.log("Service worker has been registered for scope: " + reg.scope);
        });
    }
  }
  
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
