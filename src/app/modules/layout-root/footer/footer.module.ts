import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {UiModule} from '@app/ui/ui.module';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    CommonModule,
    FlexModule,
    GridModule,
    RouterModule,
    SharedModule,
    UiModule
  ]
})
export class FooterModule {
}
