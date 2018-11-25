import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Episode} from '../../shared/model/episode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  @Input()
  episode: Episode;

  @Output()
  episodeWatched = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  watchEpisode(code: string): void {
    this.episodeWatched.emit(code);
  }

}
