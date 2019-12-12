import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalCadastrar } from './modal-cadastrar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule, ReactiveFormsModule],
  declarations: [NgbdModalCadastrar],
  exports: [NgbdModalCadastrar],
  bootstrap: [NgbdModalCadastrar]
})
export class NgbdModalCadastrarModule {}
