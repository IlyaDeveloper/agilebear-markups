import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {FlexModule, GridModule} from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    FlexModule,
    GridModule
  ]
})
export class HeaderModule { }
