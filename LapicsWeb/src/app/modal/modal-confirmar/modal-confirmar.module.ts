import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalConfirmar } from './modal-confirmar';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalConfirmar],
  exports: [NgbdModalConfirmar],
  bootstrap: [NgbdModalConfirmar]
})
export class NgbdModalConfirmarModule {}
