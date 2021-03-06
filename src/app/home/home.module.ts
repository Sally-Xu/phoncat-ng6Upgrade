import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { downgradeComponent } from '@angular/upgrade/static';
import { HomeComponent } from './home.component';
import { Ng6DemoComponent } from './ng6-demo.component';

declare var angular: any;

angular.module('phonecatApp')
  .directive(
    'ng6DemoComponent',
    downgradeComponent({component: Ng6DemoComponent})
  );

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'ng6',
      component: Ng6DemoComponent
    }
];

@NgModule({
    declarations: [
      HomeComponent,
      Ng6DemoComponent,
    ],
    imports: [
      RouterModule.forChild(routes)
    ],
    entryComponents: [
      Ng6DemoComponent,
    ],
    providers: [
    ]
})
export class HomeModule {}
