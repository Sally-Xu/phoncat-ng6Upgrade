import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlHandlingStrategy } from '@angular/router';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { Ng2DemoComponent } from './ng2-demo.component';
import { phoneServiceProvider } from './_services/phone.service';
import { HomeComponent } from './home/home.component';

declare var angular: any;

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    const should = url.toString().startsWith('/ng6') || url.toString() === '/';
    console.log('shouldProcessUrl: ', url.toString(), should);
    return should;
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({component: Ng2DemoComponent})
  );

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ng6/home'
  },
  {
    path: 'ng6/route',
    component: Ng2DemoComponent
  },
  {
    path: 'ng6/home',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot(routes,
    {
      useHash: false,
      enableTracing: false
    })
  ],
  entryComponents: [
    HomeComponent,
    Ng2DemoComponent // Don't forget this!!!
  ],
  providers: [
    phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
