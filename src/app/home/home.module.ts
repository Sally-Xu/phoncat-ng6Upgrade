import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { downgradeComponent } from '@angular/upgrade/static';
import { HomeComponent } from './home.component';
import { Ng6Component } from './ng6.component';
import { Ng6DemoComponent } from './ng6-demo.component';
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
    }
];

@NgModule({
    declarations: [
      HomeComponent,
      Ng6Component,
    ],
    imports: [
      RouterModule.forChild(routes)
    ],
    entryComponents: [
    ],
    providers: [
    ]
})
export class HomeModule {}
