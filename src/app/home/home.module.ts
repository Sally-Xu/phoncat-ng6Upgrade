import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { downgradeComponent } from '@angular/upgrade/static';
import { HomeComponent } from './home.component';
import { NgZoneDemoComponent } from './NgZoneDemo.component';
import { Ng6Component } from './ng6.component';
declare var angular: any;

// angular.module('phonecatApp')
//   .directive(
//     'ng6DemoComponent',
//     downgradeComponent({component: Ng6DemoComponent})
//   );

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'demo',
      component: Ng6Component
    },
    {
      path: 'zonedemo',
      component: NgZoneDemoComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }
];

@NgModule({
    declarations: [
      HomeComponent,
      Ng6Component,
      NgZoneDemoComponent,
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    entryComponents: [
    ],
    providers: [
    ]
})
export class HomeModule {}
