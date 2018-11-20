import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie/movie.component';
import {ShowComponent} from './show/show.component';
import {LabelDirective} from './directives/label.directive';
import {ButtonDirective} from './directives/button.directive';
import {MediaComponent} from './media/media.component';

@NgModule({
  declarations: [MovieComponent, ShowComponent, LabelDirective, ButtonDirective, MediaComponent],
  exports: [MovieComponent, ShowComponent, LabelDirective, ButtonDirective, MediaComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
