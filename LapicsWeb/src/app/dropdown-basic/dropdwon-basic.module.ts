import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDropdownBasic } from './dropdown-basic';
import { UserAuthService } from '../services/user-auth.service';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdDropdownBasic],
  exports: [NgbdDropdownBasic],
  bootstrap: [NgbdDropdownBasic]
})
export class NgbdDropdownBasicModule {

  constructor(private userAuth: UserAuthService){

  }

  logout(){
    this.userAuth.setLoggedOut(false);
  }

}
