import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../core/core.module';
import {SearchComponent} from './search.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class SearchModule {
}
