import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutRootComponent} from './layout-root.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {FooterModule} from './footer/footer.module';
import {HeaderModule} from './header/header.module';

@NgModule({
  declarations: [LayoutRootComponent],
  imports: [
    CommonModule,
    RouterModule,
    GridModule,
    FlexModule,
    HeaderModule,
    FooterModule
  ]
})
export class LayoutRootModule {
}
