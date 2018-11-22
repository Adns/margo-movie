import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../model/show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  @Input()
  show: Show;

  constructor() {
  }

  ngOnInit() {
  }

}
