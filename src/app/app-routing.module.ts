import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {MovieFullComponent} from './view/movie-full/movie-full.component';
import {ShowFullComponent} from './view/show-full/show-full.component';
import {MediasComponent} from './user/medias/medias.component';

const routes: Routes = [
  {path: 'user', component: MediasComponent},
  {path: 'movie/:id', component: MovieFullComponent},
  {path: 'show/:id', component: ShowFullComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
