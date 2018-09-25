import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import '@phonecat/app.module.js';
import '@phonecat/app.config.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng6-phonecat';
  constructor(private upgrade: UpgradeModule) { }

  ngOnInit() {
      this.upgrade.bootstrap(document.body, ['phonecatApp']);
  }
}
