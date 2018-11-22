import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs/index';
import {Picture} from '../../shared/model/picture';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private apiService: ApiService) {
  }

  getPictures(id: string): Observable<Picture[]> {
    return this.apiService.get<Picture[]>(environment.pictures.show, {id: id}).pipe(map(res => res['pictures']));
  }
}
