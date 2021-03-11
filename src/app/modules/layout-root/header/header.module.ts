import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {ExtendedModule, FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '@app/ui/ui.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    FlexModule,
    GridModule,
    SharedModule,
    UiModule,
    RouterModule,
    NgbModule,
    ExtendedModule
  ]
})
export class HeaderModule {
}
