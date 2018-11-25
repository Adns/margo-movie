import {Component, OnInit} from '@angular/core';
import {Link} from './model/link';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  criteria = '';

  links = [
    {label: 'My Movies', icon: 'fa-film', route: '/user/movies', active: false},
    {label: 'My Tv Shows', icon: 'fa-tv', route: '/user/shows', active: false}
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  setActive(link?: Link): void {
    this.links.forEach(l => l.active = false);
    if (link) {
      link.active = true;
    }
  }

  search(): void {
    this.setActive();
    this.router.navigate(['/search'], {queryParams: {criteria: this.criteria}});
  }

}
