import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-ng-zone-demo',
  templateUrl: './NgZoneDemo.component.html',
})
export class NgZoneDemoComponent {
  public progress = 0;
  public label: string;

  constructor(private ngZone: NgZone) {}

  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Inside Done!'));
  }

  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        // reenter the Angular zone and display done
        this.ngZone.run(() => { console.log('Outside Done!'); });
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }
}
