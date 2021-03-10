import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {LogoComponent} from './components/logo/logo.component';
import {ButtonMenuComponent} from '@app/ui/components/button-menu/button-menu.component';

@NgModule({
  declarations: [ButtonComponent, ButtonMenuComponent, LogoComponent],
  exports: [
    ButtonComponent,
    ButtonMenuComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiModule {
}
