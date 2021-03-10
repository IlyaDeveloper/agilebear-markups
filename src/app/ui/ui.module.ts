import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {LogoComponent} from './components/logo/logo.component';

@NgModule({
  declarations: [ButtonComponent, LogoComponent],
  exports: [
    ButtonComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiModule {
}
