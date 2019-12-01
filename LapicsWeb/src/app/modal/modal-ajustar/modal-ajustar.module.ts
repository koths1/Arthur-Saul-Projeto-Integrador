import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAjustar } from './modal-ajustar';


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdModalAjustar],
  exports: [NgbdModalAjustar],
  bootstrap: [NgbdModalAjustar]
})
export class NgbdModalAjustarModule {}
