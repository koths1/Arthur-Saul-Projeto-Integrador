import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAjustar } from './modal-ajustar';
import { NgbdDropdownTerapeuta } from 'src/app/dropdown-terapeutas/dropdown-terapeuta';
import { NgbdDropdownTerapeutaModule } from 'src/app/dropdown-terapeutas/dropdown-terapeuta.module';


@NgModule({
  imports: [BrowserModule, NgbModule ,NgbdDropdownTerapeutaModule],
  declarations: [NgbdModalAjustar],
  exports: [NgbdModalAjustar],
  bootstrap: [NgbdModalAjustar]
})
export class NgbdModalAjustarModule {}
