import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeHeaderComponentFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onHeaderComponentActivate() {   //Utilizamos o event emiter para ativar funções em outros componentes.
    this.invokeHeaderComponentFunction.emit();
  }

}
