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
import {ListComponent} from './components/list/list.component';
import {InputComponent} from './components/input/input.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {ValidationMessagesComponent} from './components/validation-messages/validation-messages.component';
import {TextareaComponent} from './components/textarea/textarea.component';
import {FormsModule} from '@angular/forms';


const COMPONENTS = [
    ButtonComponent,
    ButtonMenuComponent,
    LogoComponent,
    LinkComponent,
    ButtonDownloadComponent,
    HeadingComponent,
    LabelComponent,
    ListComponent,
    InputComponent,
    CheckboxComponent,
    ValidationMessagesComponent,
    TextareaComponent
  ]
;

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    GridModule,
    RouterModule,
    FormsModule,
  ]
})
export class UiModule {
}
