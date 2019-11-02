import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLoggedIn = false;
  tipoUsuario: string;  

  constructor() { }

  setLoggedIn(_value) {
    this.isLoggedIn = _value;
}
isAuthenticated(): boolean {
    return this.isLoggedIn;
}

}
