import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScrumTrainingComponent} from './scrum-training.component';

const routes: Routes = [
  {
    path: '',
    component: ScrumTrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumTrainingRoutingModule {
}
