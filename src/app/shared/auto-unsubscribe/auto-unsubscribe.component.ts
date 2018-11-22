import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/index';

@Component({
  template: ''
})
export class AutoUnsubscribeComponent implements OnDestroy {

  protected close = new Subject<void>();

  constructor() {
  }

  ngOnDestroy() {
    this.close.next();
  }

}
