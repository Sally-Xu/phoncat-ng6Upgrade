import { Component, OnInit, Inject } from '@angular/core';
import { PHONE_SERVICE } from "../_services/phone.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phones: any[] = [];

  constructor(
    @Inject(PHONE_SERVICE) private phoneService: any) {
    }

    ngOnInit() {
      console.log('ng2-demo');
      this.phones = this.phoneService.query();
    }
}
