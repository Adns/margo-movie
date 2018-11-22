import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediasComponent } from './medias/medias.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MediasComponent],
  exports: [MediasComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
