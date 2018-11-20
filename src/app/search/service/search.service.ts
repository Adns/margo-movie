import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs/index';
import {Shows} from '../../core/model/show';
import {environment} from '../../../environments/environment';
import {Movies} from '../../core/model/movie';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private api: ApiService) {
  }

  searchShow(title: string): Observable<Shows> {
    return this.api.get<Shows>(environment.search.show, {title: title}).pipe(map(res => new Shows().deserialize(res)));
  }

  searchMovie(title: string): Observable<Movies> {
    return this.api.get<Movies>(environment.search.movie, {title: title}).pipe(map(res => new Movies().deserialize(res)));
  }
}
