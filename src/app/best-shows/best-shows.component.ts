import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BestShowsService} from '../services/best-shows.service';
import {Show} from '../shared/model/show';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-best-shows',
  templateUrl: './best-shows.component.html',
  styleUrls: ['./best-shows.component.scss']
})
export class BestShowsComponent implements OnInit, OnChanges {

  @Input()
  limit: number;

  @Input()
  type: string;

  shows$: Observable<Show[]>;

  constructor(private bestShowsService: BestShowsService) {
  }

  ngOnInit() {
    this.refreshShows();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshShows();
  }

  private refreshShows() {
    this.shows$ = this.bestShowsService.getMostShows(this.limit, this.type);
  }

}
