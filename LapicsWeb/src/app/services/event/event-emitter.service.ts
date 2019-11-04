import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeHeaderComponentFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onHeaderComponentActivate() {
    this.invokeHeaderComponentFunction.emit();
  }

}
