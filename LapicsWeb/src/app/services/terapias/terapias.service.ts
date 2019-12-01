import { Injectable } from '@angular/core';
import { Terapia } from 'src/app/model/terapia';
import { Terapias } from 'src/app/model/terapias';

@Injectable({
  providedIn: 'root'
})
export class TerapiasService {

  constructor() { }

  getTerapias(): Terapia[] {   //Service criado para manipular o array de terapias estático.
    return Terapias;
  }

  getTerapia(terapia: string): Terapia {
    for (let i = 0; i < Terapias.length; i++) {
      if (Terapias[i].nome === terapia) {
        console.log("Chamou o getTerapia, puxando a terapia:" + Terapias[i].nome);
        return Terapias[i];
      }
    }
  }
}
