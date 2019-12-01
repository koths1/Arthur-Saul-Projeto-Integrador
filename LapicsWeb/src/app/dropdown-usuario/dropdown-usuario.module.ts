import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDropdownUsuario } from './dropdown-usuario';



@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdDropdownUsuario],
  exports: [NgbdDropdownUsuario],
  bootstrap: [NgbdDropdownUsuario]
})
export class NgbdDropdownUsuarioModule {}
