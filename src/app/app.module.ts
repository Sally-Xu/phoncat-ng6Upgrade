import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlHandlingStrategy } from '@angular/router';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { Ng6DemoComponent } from './home/ng6-demo.component';
import { phoneServiceProvider } from './_services/phone.service';
import { HomeComponent } from './home/home.component';

declare var angular: any;

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    const should = !url.toString().startsWith('/#/') || url.toString() === '/';
    console.log('shouldProcessUrl: ', url.toString(), should);
    return should;
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'route',
    component: Ng6DemoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    Ng6DemoComponent,
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
  ],
  providers: [
    phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
