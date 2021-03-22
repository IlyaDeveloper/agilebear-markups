import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '../../../ui/ui.module';
import {SharedModule} from '../../../shared/shared.module';
import { ServicesListComponent } from './components/services-list/services-list.component';


@NgModule({
  declarations: [ServicesComponent, ServicesListComponent],
  exports: [
    ServicesListComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    GridModule,
    FlexModule,
    UiModule,
    SharedModule
  ]
})
export class ServicesModule { }
