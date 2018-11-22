import {Component, Input, OnInit} from '@angular/core';
import {PictureService} from '../services/picture.service';
import {Observable} from 'rxjs/index';
import {Picture} from '../../shared/model/picture';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  @Input()
  id: string;

  pictures$: Observable<Picture[]>;

  constructor(private pictureService: PictureService) {
  }

  ngOnInit() {
    this.pictures$ = this.pictureService.getPictures(this.id);
  }

}
