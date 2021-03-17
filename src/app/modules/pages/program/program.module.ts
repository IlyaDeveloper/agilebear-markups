import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProgramRoutingModule} from './program-routing.module';
import {ProgramComponent} from './program.component';
import {IntroductionComponent} from './components/introduction/introduction.component';
import {CourseOptionsComponent} from './components/course-options/course-options.component';
import {TopicCoveredComponent} from './components/topic-covered/topic-covered.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '../../../ui/ui.module';
import {SharedModule} from '@shared/shared.module';
import { ProgramDetailComponent } from './components/program-detail/program-detail.component';


@NgModule({
  declarations: [ProgramComponent, IntroductionComponent, CourseOptionsComponent, TopicCoveredComponent, ProgramDetailComponent],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    GridModule,
    FlexModule,
    UiModule,
    SharedModule
  ]
})
export class ProgramModule {
}
