import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {Episode} from '../../shared/model/episode';
import {ApiService} from '../../core/services/api.service';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private apiService: ApiService) {
  }

  getEpisodes(id: string): Observable<Episode[]> {
    return this.apiService.get<Episode[]>(environment.episode.shows, {id: id}).pipe(map(res => res['episodes']));
  }
}
