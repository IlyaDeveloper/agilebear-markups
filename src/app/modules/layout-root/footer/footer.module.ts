import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FlexModule, GridModule} from '@angular/flex-layout';


@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    CommonModule,
    FlexModule,
    GridModule
  ]
})
export class FooterModule {
}
