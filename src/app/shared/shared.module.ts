import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie/movie.component';
import {ShowComponent} from './show/show.component';
import {LabelDirective} from './directives/label.directive';
import {ButtonDirective} from './directives/button.directive';
import {MediaComponent} from './media/media.component';
import {RouterModule} from '@angular/router';
import {AutoUnsubscribeComponent} from './auto-unsubscribe/auto-unsubscribe.component';
import {BlockComponent} from './block/block.component';
import {LoaderComponent} from './loader/loader.component';
import {NotePipe} from './pipes/note.pipe';
import {NoteComponent} from './note/note.component';

@NgModule({
  declarations: [
    MovieComponent,
    ShowComponent,
    LabelDirective,
    ButtonDirective,
    MediaComponent,
    AutoUnsubscribeComponent,
    BlockComponent,
    LoaderComponent,
    NotePipe,
    NoteComponent
  ],
  exports: [
    MovieComponent,
    ShowComponent,
    LabelDirective,
    ButtonDirective,
    MediaComponent,
    BlockComponent,
    LoaderComponent,
    NotePipe,
    NoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
