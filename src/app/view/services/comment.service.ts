import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs/index';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private apiService: ApiService) {
  }

  getComment(id: string, type: string): Observable<Comment[]> {
    return this.apiService.get<Comment[]>(environment.comment, {
      id: id,
      type: type,
      nbpp: 10000
    }).pipe(map(res => res['comments']));
  }
}
