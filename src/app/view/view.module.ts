import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';

@NgModule({
  declarations: [MoviesComponent, ShowsComponent],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
