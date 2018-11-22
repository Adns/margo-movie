import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieFullComponent} from './movie-full/movie-full.component';
import {ShowFullComponent} from './show-full/show-full.component';
import {SharedModule} from '../shared/shared.module';
import {PicturesComponent} from './pictures/pictures.component';

@NgModule({
  declarations: [MovieFullComponent, ShowFullComponent, PicturesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ViewModule {
}
