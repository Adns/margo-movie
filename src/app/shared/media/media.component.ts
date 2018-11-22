import {Component, Input, OnInit} from '@angular/core';
import {Media} from '../model/media';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  @Input()
  media: Media;

  constructor() {
  }

  ngOnInit() {
  }

}
