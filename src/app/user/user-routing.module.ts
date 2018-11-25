import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MediasComponent} from './medias/medias.component';

const routes: Routes = [
  {path: ':type', component: MediasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
