import { Component, OnInit, ɵNoopNgZone } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import '@routerapp/app.module.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng6-routerapp';
  constructor(private upgrade: UpgradeModule, private noopZone: ɵNoopNgZone) { }

  ngOnInit() {
    this.upgrade.ngZone = this.noopZone;
    this.upgrade.bootstrap(document.body, ['routerApp']);
  }
}
