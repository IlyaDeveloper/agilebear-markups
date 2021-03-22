import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ScrumTrainingRoutingModule} from './scrum-training-routing.module';
import {ScrumTrainingComponent} from './scrum-training.component';
import {EventItemComponent} from './components/event-item/event-item.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '../../../ui/ui.module';
import {SharedModule} from '@shared/shared.module';
import { EventsListComponent } from './components/events-list/events-list.component';


@NgModule({
    declarations: [ScrumTrainingComponent, EventItemComponent, EventsListComponent],
  exports: [
    ScrumTrainingComponent,
    EventsListComponent
  ],
    imports: [
        CommonModule,
        ScrumTrainingRoutingModule,
        GridModule,
        FlexModule,
        UiModule,
        SharedModule
    ]
})
export class ScrumTrainingModule {
}
