import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '../../../ui/ui.module';
import {SharedModule} from '../../../shared/shared.module';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { WhatIsComponent } from './components/what-is/what-is.component';
import { DistanceLearningComponent } from './components/distance-learning/distance-learning.component';


@NgModule({
  declarations: [HomeComponent, MostPopularComponent, WhatIsComponent, DistanceLearningComponent],
  exports: [
    MostPopularComponent,
    WhatIsComponent,
    DistanceLearningComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GridModule,
    FlexModule,
    UiModule,
    SharedModule
  ]
})
export class HomeModule {
}
