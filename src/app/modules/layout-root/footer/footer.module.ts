import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {UiModule} from '@app/ui/ui.module';
import {SharedModule} from '@shared/shared.module';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    CommonModule,
    FlexModule,
    GridModule,
    RouterModule,
    SharedModule,
    UiModule,
    NgbButtonsModule
  ]
})
export class FooterModule {
}
