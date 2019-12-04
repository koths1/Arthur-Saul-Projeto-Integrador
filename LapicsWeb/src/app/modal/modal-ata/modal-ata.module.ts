import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAta } from './modal-ata';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalAta],
  exports: [NgbdModalAta],
  bootstrap: [NgbdModalAta]
})
export class NgbdModalAtaModule {}
