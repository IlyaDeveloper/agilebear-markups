import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiRoutingModule} from './ui-routing.module';
import {UiComponent} from './ui.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {SharedModule} from '../../../shared/shared.module';
import {HeaderModule} from '../../layout-root/header/header.module';
import {FooterModule} from '../../layout-root/footer/footer.module';
import {HomeModule} from '../home/home.module';
import {AboutUsModule} from '../about-us/about-us.module';
import {ScrumTrainingModule} from '../scrum-training/scrum-training.module';
import {ServicesModule} from '../services/services.module';
import {ProgramModule} from '../program/program.module';
import {ContactModule} from '../contact/contact.module';

@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    GridModule,
    FlexModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    AboutUsModule,
    ScrumTrainingModule,
    ServicesModule,
    ProgramModule,
    ContactModule
  ]
})
export class UiModule {
}
