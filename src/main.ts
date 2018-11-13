import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@environments/environment';
import { setAngularLib  } from '@angular/upgrade/static';
import * as angular from 'angular';
setAngularLib(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'zone.js' })
  .catch(err => console.log(err));

// import { enableProdMode, StaticProvider, NgZone} from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { downgradeModule, setAngularLib, downgradeInjectable } from '@angular/upgrade/static';

// import { AppModule } from '@app/app.module';
// import { environment } from './environments/environment';

// import routerApp from '@routerapp/app.module.js';

// import * as angular from 'angular';
// import $ from 'jquery';

// setAngularLib(angular);

// if (environment.production) {
//   enableProdMode();
// }

// const bootstrapFn = (extraProviders: StaticProvider[]) => {
//   const platformRef = platformBrowserDynamic(extraProviders);
//   return platformRef.bootstrapModule(AppModule);
// };

// const downgradedModule = downgradeModule(bootstrapFn);

// angular.module('appV2', [
//   routerApp.name,
//   downgradedModule
// ])
// .factory('heroesService', downgradeInjectable(HeroesService) as any);

// angular.bootstrap(document.body, ['appV2']);
