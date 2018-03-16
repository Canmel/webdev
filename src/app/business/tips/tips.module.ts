import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TipsComponent} from './tips.component';
import {TipsRoutingModule} from './tips-routing.module';
import {ModalComponent} from '../../public/modal/modal.component';
import {AccordionModule, AlertModule, ButtonsModule, ModalModule} from 'ngx-bootstrap';
import {BsModalService} from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    TipsRoutingModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    TipsComponent,
    ModalComponent
  ],
  exports: [],
  providers: [BsModalService]
})
export class TipsModule {
}
