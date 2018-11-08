import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  template: ``
})
export class EmptyComponent implements OnInit {
  ngOnInit() {
    console.log('empty-component-start');
  }
}
