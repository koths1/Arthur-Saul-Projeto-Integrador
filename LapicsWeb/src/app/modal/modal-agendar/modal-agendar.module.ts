import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAgendar } from './modal-agendar';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalAgendar],
  exports: [NgbdModalAgendar],
  bootstrap: [NgbdModalAgendar]
})
export class NgbdModalAgendarModule {}
