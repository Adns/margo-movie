import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {AutoUnsubscribeComponent} from '../../shared/auto-unsubscribe/auto-unsubscribe.component';
import {takeUntil} from 'rxjs/internal/operators';
import {Media} from '../../shared/model/media';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.scss']
})
export class MediasComponent extends AutoUnsubscribeComponent implements OnInit {

  medias$: Observable<Media[]>;
  title: string;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.close)).subscribe(params => {
      const type = params.type;
      this.title = type === 'movies' ? 'Movies' : 'Shows';
      this.medias$ = type === 'movies' ? this.userService.getUserMovies() : this.userService.getUserShows();
    });
  }

}
