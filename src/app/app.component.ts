import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import '../app1/app.module.js';
import '../app1/app.config.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng6Upgrade';
  constructor(private upgrade: UpgradeModule) { }

  ngOnInit() {
      this.upgrade.bootstrap(document.body, ['phonecatApp']);
  }
}
