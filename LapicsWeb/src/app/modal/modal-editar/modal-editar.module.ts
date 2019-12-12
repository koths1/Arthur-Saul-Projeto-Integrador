import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalEditar } from './modal-editar';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalEditar],
  exports: [NgbdModalEditar],
  bootstrap: [NgbdModalEditar]
})
export class NgbdModalEditarModule {}
