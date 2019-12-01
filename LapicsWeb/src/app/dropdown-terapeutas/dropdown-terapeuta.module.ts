import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDropdownTerapeuta } from './dropdown-terapeuta';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdDropdownTerapeuta],
  exports: [NgbdDropdownTerapeuta],
  bootstrap: [NgbdDropdownTerapeuta]
})
export class NgbdDropdownTerapeutaModule {}
