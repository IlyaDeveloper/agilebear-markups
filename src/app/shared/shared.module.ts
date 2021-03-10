import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBgSectionComponent} from './components/top-bg-section/top-bg-section.component';
import {TopPanelComponent} from './components/top-panel/top-panel.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '../ui/ui.module';

@NgModule({
  declarations: [TopBgSectionComponent, TopPanelComponent, MainMenuComponent],
  exports: [TopBgSectionComponent, TopPanelComponent, MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    GridModule,
    UiModule
  ]
})
export class SharedModule {
}
