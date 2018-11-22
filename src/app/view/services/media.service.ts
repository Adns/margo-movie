import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs/index';
import {Show, Shows} from '../../shared/model/show';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/internal/operators';
import {Movie, Movies} from '../../shared/model/movie';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private apiService: ApiService) {
  }

  getShow(id: string): Observable<Show> {
    return this.apiService.get<Shows>(environment.info.show, {id: id}).pipe(map(res => new Show().deserialize(res['show'])));
  }

  getMovie(id: string): Observable<Movie> {
    return this.apiService.get<Movies>(environment.info.movie, {id: id}).pipe(map(res => new Movie().deserialize(res['movie'])));
  }
}
