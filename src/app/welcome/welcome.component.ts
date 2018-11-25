import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  items = [
    {label: 'Popular', value: 'popularity'},
    {label: 'Followed', value: 'followers'}
  ];

  selectedItem = this.items[0];

  constructor() {
  }

  ngOnInit() {
  }

  change(event: Event): void {
    this.selectedItem = this.items.find(e => e.value === event.target['value']);
  }

}
