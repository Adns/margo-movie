import {Component, OnInit} from '@angular/core';
import {SearchService} from './service/search.service';
import {Observable} from 'rxjs/index';
import {ActivatedRoute} from '@angular/router';
import {Shows} from '../core/model/show';
import {Movies} from '../core/model/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  shows: Shows;
  movies: Movies;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.search(params['criteria']));
  }

  private search(criteria: string) {
    this.searchService.searchShow(criteria).subscribe(shows => this.shows = shows);
    this.searchService.searchMovie(criteria).subscribe(movies => this.movies = movies);
  }

}
