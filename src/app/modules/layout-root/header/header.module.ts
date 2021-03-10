import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '@app/ui/ui.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    FlexModule,
    GridModule,
    SharedModule,
    UiModule,
    RouterModule
  ]
})
export class HeaderModule { }
