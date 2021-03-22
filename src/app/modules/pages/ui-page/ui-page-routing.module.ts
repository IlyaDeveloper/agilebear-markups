import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UiPageComponent} from './ui-page.component';

const routes: Routes = [
  {
    path: '',
    component: UiPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPageRoutingModule {
}
