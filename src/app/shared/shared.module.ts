import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBgSectionComponent} from './components/top-bg-section/top-bg-section.component';
import {TopPanelComponent} from './components/top-panel/top-panel.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '../ui/ui.module';
import {ServicesPlaceComponent} from './components/services-place/services-place.component';
import {ServicesLogosComponent} from './components/services-logos/services-logos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PopularCardComponent} from './components/popular-card/popular-card.component';
import {TeamPhotoComponent} from './components/team-photo/team-photo.component';

const COMPONENTS = [
  TopBgSectionComponent,
  TopPanelComponent,
  MainMenuComponent,
  ServicesPlaceComponent,
  ServicesLogosComponent,
  PopularCardComponent,
  TeamPhotoComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    GridModule,
    UiModule,
    NgbModule
  ]
})
export class SharedModule {
}
