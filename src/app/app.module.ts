import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlHandlingStrategy } from '@angular/router';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from '@app/routerapp/app.component';
import { EmptyComponent } from '@app/home/empty.component';
import { CommonModule } from '@angular/common';

// import { phoneServiceProvider } from './_services/phone.service';

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    const should = url.toString().startsWith('/ui');
    console.log('shouldProcessUrl: ', url.toString(), should);
    return should;
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

const routes: Routes = [
  {
    path: '',
    component: EmptyComponent
  },
  {
    path: 'ui',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UpgradeModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
  ],
  providers: [
    // phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  ngDoBootstrap() {
    // do nothing here, do not remove this until everything is migrated to ng6
    console.log('DoBootstrap');
  }
}
