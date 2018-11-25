import {Injectable} from '@angular/core';
import {ApiService} from '../core/services/api.service';
import {Show} from '../shared/model/show';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class BestShowsService {

  constructor(private apiService: ApiService) {
  }

  getMostShows(limit: number, type: string): Observable<Show[]> {
    return this.apiService.get<Show[]>(environment.best.shows, {
      order: type,
      limit: limit
    }).pipe(map(res => res['shows'].map(s => new Show().deserialize(s))));
  }
}
