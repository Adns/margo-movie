import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './view/movies/movies.component';
import {ShowsComponent} from './view/shows/shows.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
