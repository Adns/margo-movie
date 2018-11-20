import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  static buildUrl(path: string, params: { [p: string]: string | number }): string {
    let url = environment.endPoint + path;
    let separator = '?';

    Object.keys(params).forEach(k => {
      url = url + separator + k + '=' + params[k];
      separator = '&';
    });

    return url;
  }

  get<T>(path: string, params?: { [key: string]: string | number }): Observable<T> {
    const url = ApiService.buildUrl(path, params);
    return this.http.get<T>(url, {headers: {'X-BetaSeries-Key': 'f93c137ff1b0'}});
  }
}
