import {Component, OnInit} from '@angular/core';
import {Movie} from '../../shared/model/movie';
import {ActivatedRoute} from '@angular/router';
import {MediaService} from '../services/media.service';
import {AutoUnsubscribeComponent} from '../../shared/auto-unsubscribe/auto-unsubscribe.component';
import {takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'app-movie-full',
  templateUrl: './movie-full.component.html',
  styleUrls: ['./movie-full.component.scss']
})
export class MovieFullComponent extends AutoUnsubscribeComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private mediaService: MediaService) {
    super();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.mediaService.getMovie(id).pipe(takeUntil(this.close)).subscribe(res => this.movie = res);
  }
}
