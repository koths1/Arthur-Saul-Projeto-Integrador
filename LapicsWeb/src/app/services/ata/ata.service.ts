import { Injectable } from '@angular/core';
import { Ata } from 'src/app/model/ata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtaService {

  ata: Ata;   //Ata armazenada no service, pode ser utilizada/acessada pelos componentes que declararem o ataService.
  private apiurl = 'https://lapicsweb-api.herokuapp.com';   //Url da api qual fazemos as chamadas Http.

  constructor(private http: HttpClient) { }

  getAta(): Observable<Ata[]> {    //Puxa todos os registros de ata.
    return this.http.get<Ata[]>(this.apiurl + '/ata')
  }

  getAtaById(idAta: number): Observable<Ata[]> {   //Puxa um registro de ata por id.
    return this.http.get<Ata[]>(this.apiurl + '/ata/' + idAta)
  }

  getAtaByAgendamento(idAgendamento: number): Observable<Ata[]> {    //Puxa um registro de ata a partir do id de um agendamento.
    return this.http.get<Ata[]>(this.apiurl + '/ataAgendamento/' + idAgendamento)
  }

  createAta(ata: Ata) {    //Cria um registro de ata (Terapeuta)
    this.http.post(this.apiurl + '/' + ata.idagendamento + "/" + ata.idparticipante + "/" + ata.idterapeuta, { "pic": ata.pic, "observacoes": ata.observacoes }).subscribe(res => { console.log(res) })
  }

  editAta(ata: Ata) {    //Editar um registro de ata (Terapeuta).
    this.http.post(this.apiurl + '/' + ata.idagendamento + "/" + ata.idparticipante + "/" + ata.idterapeuta, { "pic": ata.pic, "observacoes": ata.observacoes }).subscribe(res => { console.log(res) })
  }

  setAtaSelecionada(ata: Ata) {    //Define a ata armazenada no service.
    this.ata = ata
  }

  getAtaSelecionada(): Ata {   //Retorna a ata armazenada no service.
    return this.ata
  }

  removeAtaSelecionada() {   //Remove a ata armazenada no service.
    this.ata = null
  }

}
