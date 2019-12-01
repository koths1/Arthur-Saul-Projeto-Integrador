import { Injectable } from '@angular/core';
import { Mensagem } from 'src/app/model/mensagem';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string   //Este service serve somente para armazenar uma string, de forma "global".

  constructor() { }

  setMessage(message: string) {    //Define a mensagem armazenada no service.
    this.message = message
    console.log(this.message)
  }

  getMessage(): string {   //Retorna a mensagem armazenada no service.
    console.log(this.message)
    return this.message
  }

  removeMessage() {    //Remove a mensagem armazenada no service.
    this.message = null
  }

}
