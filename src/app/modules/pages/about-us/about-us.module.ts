import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutUsRoutingModule} from './about-us-routing.module';
import {AboutUsComponent} from './about-us.component';
import {ExtendedModule, FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '../../../ui/ui.module';
import {WeAreComponent} from './components/we-are/we-are.component';
import {OurTeamComponent} from './components/our-team/our-team.component';
import {SharedModule} from '@shared/shared.module';
import {WeWorkComponent} from './components/we-work/we-work.component';
import { WhatsOnOfferComponent } from './components/whats-on-offer/whats-on-offer.component';

@NgModule({
  declarations: [AboutUsComponent, WeAreComponent, OurTeamComponent, WeWorkComponent, WhatsOnOfferComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    GridModule,
    FlexModule,
    UiModule,
    SharedModule,
    ExtendedModule
  ]
})
export class AboutUsModule {
}
