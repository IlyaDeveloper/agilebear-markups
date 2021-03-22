import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './contact.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {UiModule} from '../../../ui/ui.module';
import {SharedModule} from '@shared/shared.module';
import {FormContactComponent} from './components/form-contact/form-contact.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ContactComponent, FormContactComponent],
    imports: [
        CommonModule,
        ContactRoutingModule,
        GridModule,
        FlexModule,
        UiModule,
        SharedModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ContactModule {
}
