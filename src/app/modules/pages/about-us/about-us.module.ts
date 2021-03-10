import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutUsRoutingModule} from './about-us-routing.module';
import {AboutUsComponent} from './about-us.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '../../../ui/ui.module';


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    GridModule,
    FlexModule,
    UiModule
  ]
})
export class AboutUsModule {
}
