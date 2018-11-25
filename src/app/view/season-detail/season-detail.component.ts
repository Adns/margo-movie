import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Episode} from '../../shared/model/episode';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.scss']
})
export class SeasonDetailComponent implements OnInit {

  @Input()
  episodes: Episode[];

  @Output()
  episodeWatched = new EventEmitter<string>();

  seasonDetails: { [number: number]: Episode[] } = {};

  constructor() {
  }

  ngOnInit() {
    this.episodes.sort((e1, e2) => e1.season - e2.season).forEach(e => {
      if (typeof this.seasonDetails[e.season] === 'undefined') {
        this.seasonDetails[e.season] = [];
      }

      this.seasonDetails[e.season].push(e);
    });

    Object.keys(this.seasonDetails).forEach(k => {
      this.seasonDetails[k].sort((e1, e2) => e1.episode - e2.episode);
    });
  }

  watchEpisode(code: string): void {
    this.episodeWatched.emit(code);
  }

}
