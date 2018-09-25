import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Ng6DemoComponent } from './ng6-demo.component';

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
    providers: [
    ]
})
export class HomeModule {}
