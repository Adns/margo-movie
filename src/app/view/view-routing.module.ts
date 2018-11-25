import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieFullComponent} from './movie-full/movie-full.component';
import {ShowFullComponent} from './show-full/show-full.component';

const routes: Routes = [
  {path: 'movie/:id', component: MovieFullComponent},
  {path: 'show/:id', component: ShowFullComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {
}
