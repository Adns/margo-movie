import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MediaService} from '../services/media.service';
import {Show} from '../../shared/model/show';
import {AutoUnsubscribeComponent} from '../../shared/auto-unsubscribe/auto-unsubscribe.component';
import {takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'app-show-full',
  templateUrl: './show-full.component.html',
  styleUrls: ['./show-full.component.scss']
})
export class ShowFullComponent extends AutoUnsubscribeComponent implements OnInit {

  show: Show;

  constructor(private route: ActivatedRoute, private mediaService: MediaService) {
    super();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.mediaService.getShow(id).pipe(takeUntil(this.close)).subscribe(res => this.show = res);
  }

}
