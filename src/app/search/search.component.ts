import {Component, OnInit} from '@angular/core';
import {SearchService} from './service/search.service';
import {ActivatedRoute} from '@angular/router';
import {Shows} from '../shared/model/show';
import {Movies} from '../shared/model/movie';
import {AutoUnsubscribeComponent} from '../shared/auto-unsubscribe/auto-unsubscribe.component';
import {takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends AutoUnsubscribeComponent implements OnInit {

  shows: Shows;
  movies: Movies;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.search(params['criteria']));
  }

  private search(criteria: string) {
    this.searchService.searchShow(criteria).pipe(takeUntil(this.close)).subscribe(shows => this.shows = shows);
    this.searchService.searchMovie(criteria).pipe(takeUntil(this.close)).subscribe(movies => this.movies = movies);
  }

}
