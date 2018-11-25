import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediasComponent} from './medias/medias.component';
import {SharedModule} from '../shared/shared.module';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [MediasComponent],
  exports: [MediasComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
