import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigateComponent} from './navigate.component';
import {LinkComponent} from './link/link.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [NavigateComponent, LinkComponent],
  exports: [NavigateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class NavigateModule {
}
