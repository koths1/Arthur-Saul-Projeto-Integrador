import { Component, OnInit } from '@angular/core';
import { TerapiasService } from 'src/app/services/terapias/terapias.service';
import { Terapia } from 'src/app/model/terapia';

@Component({
  selector: 'app-recomendar-terapia',
  templateUrl: './recomendar-terapia.component.html',
  styleUrls: ['./recomendar-terapia.component.css']
})
export class RecomendarTerapiaComponent implements OnInit {

  //Aqui declaramos 2 arrays que vamos utilizar para recomendar as terapias
  terapias: Terapia[];  //Array de terapias que vai receber todas as terapias oferecidas pelo LAPICS
  terapiasRec: Terapia[];   //Vai ser uma copia do array de terapias mas vai ter certas terapias removidas 
  toque: string;    //Variaveis declaradas de acordo com as perguntas para a "filtragem"
  som: string;
  luz: string;
  cheiro: string;
  maca: string;


  constructor(private terapiasService: TerapiasService) { //Chamamos o terapiasService pois este tem a função de trazer a lista de terapias
    this.terapias = null;
  }

  ngOnInit() {
  }

  //Aqui a função que recomenda as terapias, as variáveis são preenchidas quando o usuário clica em um dos botões
  //Ao clicas no botão enviar, começa a função Recomenda
  Recomenda(): void {
    console.log("Valor do Toque" + this.toque + " Valor do Som: " + this.som);
    this.terapias = this.terapiasService.getTerapias(); //Pega todas as terapias
    this.terapiasRec = this.terapias; //Faz uma copia delas
    if (this.toque === "N") { //Caso o usuário não esteja de acordo, entra aqui
      for (let i = 0; i < this.terapiasRec.length; i++) { //For para varrer o array e encontrar as terapias que queremos remover
        if (this.terapiasRec[i].nome === "Reiki" ||
          this.terapiasRec[i].nome === "Barras de access" ||
          this.terapiasRec[i].nome === "Thetahealing" ||
          this.terapiasRec[i].nome === "Kinesiologia") {
          this.terapiasRec.splice(i, 1);  //Ao encontrar o indice que queremos remover, splice remove
          i--;
        }
      }
    }
    if (this.som === "N") {
      for (let i = 0; i < this.terapiasRec.length; i++) {
        if (this.terapiasRec[i].nome === "Reiki") {
          this.terapiasRec.splice(i, 1);
        }
      }
    }
    if (this.luz === "N") {
      for (let i = 0; i < this.terapiasRec.length; i++) {
        if (this.terapiasRec[i].nome === "Cromoterapia") {
          this.terapiasRec.splice(i, 1);
        }
      }
    }
    if (this.cheiro === "N") {
      for (let i = 0; i < this.terapiasRec.length; i++) {
        if (this.terapiasRec[i].nome === "Aromaterapia") {
          this.terapiasRec.splice(i, 1);
        }
      }
    }
    if (this.maca === "N") {
      for (let i = 0; i < this.terapiasRec.length; i++) {
        if (this.terapiasRec[i].nome === "Reiki" ||
          this.terapiasRec[i].nome === "Barras de access" ||
          this.terapiasRec[i].nome === "Kinesiologia") {
          this.terapiasRec.splice(i, 1);
          i--;
        }
      }
    }
  }
}
