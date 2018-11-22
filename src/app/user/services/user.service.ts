import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Movie} from '../../shared/model/movie';
import {Observable} from 'rxjs/index';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/internal/operators';
import {Show} from '../../shared/model/show';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) {
  }

  getUserMovies(): Observable<Movie[]> {
    return this.apiService.get<Movie[]>(environment.user.movies, {nb: 10})
      .pipe(map(res => res['movies'].map(m => new Movie().deserialize(m))));
  }

  getUserShows(): Observable<Show[]> {
    return this.apiService.get<Movie[]>(environment.user.shows, {nb: 10})
      .pipe(map(res => res['shows'].map(s => new Show().deserialize(s))));
  }
}
