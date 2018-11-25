import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MediaService} from '../services/media.service';
import {Show} from '../../shared/model/show';
import {AutoUnsubscribeComponent} from '../../shared/auto-unsubscribe/auto-unsubscribe.component';
import {takeUntil} from 'rxjs/internal/operators';
import {Episode} from '../../shared/model/episode';
import {EpisodeService} from '../services/episode.service';

@Component({
  selector: 'app-show-full',
  templateUrl: './show-full.component.html',
  styleUrls: ['./show-full.component.scss']
})
export class ShowFullComponent extends AutoUnsubscribeComponent implements OnInit {

  show: Show;
  episodes: Episode[];
  watchedEpisodes = [];

  constructor(private route: ActivatedRoute, private mediaService: MediaService, private episodeService: EpisodeService) {
    super();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.mediaService.getShow(id).pipe(takeUntil(this.close)).subscribe(res => this.show = res);
    this.episodeService.getEpisodes(id).pipe(takeUntil(this.close)).subscribe(res => this.episodes = res);
  }

  watchEpisode(code: string): void {
    this.watchedEpisodes.push(code);
  }

}
