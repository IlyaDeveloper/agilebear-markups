import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {LogoComponent} from './components/logo/logo.component';
import {ButtonMenuComponent} from '@app/ui/components/button-menu/button-menu.component';
import {LinkComponent} from './components/link/link.component';
import {RouterModule} from '@angular/router';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {ButtonDownloadComponent} from './components/button-download/button-download.component';
import {HeadingComponent} from './components/heading/heading.component';
import {LabelComponent} from './components/label/label.component';

const COMPONENTS = [
    ButtonComponent,
    ButtonMenuComponent,
    LogoComponent,
    LinkComponent,
    ButtonDownloadComponent,
    HeadingComponent,
    LabelComponent
  ]
;

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    GridModule,
    RouterModule
  ]
})
export class UiModule {
}
