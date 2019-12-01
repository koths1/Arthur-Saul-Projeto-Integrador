import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalCadastrar } from './modal-cadastrar';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalCadastrar],
  exports: [NgbdModalCadastrar],
  bootstrap: [NgbdModalCadastrar]
})
export class NgbdModalCadastrarModule {}
