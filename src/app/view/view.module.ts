import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieFullComponent} from './movie-full/movie-full.component';
import {ShowFullComponent} from './show-full/show-full.component';
import {SharedModule} from '../shared/shared.module';
import {PicturesComponent} from './pictures/pictures.component';
import {ViewRoutingModule} from './view-routing.module';

@NgModule({
  declarations: [MovieFullComponent, ShowFullComponent, PicturesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ViewRoutingModule
  ]
})
export class ViewModule {
}
