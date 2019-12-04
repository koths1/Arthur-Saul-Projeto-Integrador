import { Injectable } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }

  agendamento: Agendamento;   //Agendamento que é armazenado no service, estará disponivel se for declarado e se o agendamento.service for declarado em um componente
  agendamentosDia: Agendamento[] = []
  terapeuta: Usuario
  participante: Usuario
  private apiurl = 'https://lapicsweb-api.herokuapp.com';   //Url da api qual fazemos as chamadas Http

  getAgendamentos(): Observable<Agendamento[]> {   //Puxa todos os agendamentos.
    return this.http.get<Agendamento[]>(this.apiurl + '/agendamentos')
  }

  getProxAgendamentos(): Observable<Agendamento[]> {   //Puxa os proximos agendamentos a partir do dia de hoje.
    return this.http.get<Agendamento[]>(this.apiurl + '/proxAgendamentos')
  }

  getAgendamento(idagendamento: number): Observable<Agendamento[]> {   //Puxa um agendamento por ID.
    return this.http.get<Agendamento[]>(this.apiurl + '/agendamentos/' + idagendamento)
  }

  getAgendamentosDisponiveis(): Observable<Agendamento[]> {    //Puxa os agendamentos disponíveis a partir do dia de hoje.
    return this.http.get<Agendamento[]>(this.apiurl + '/agendamentosDisponiveis')
  }

  getAgendamentosPorData(seg: Date,sex: Date): Observable<Agendamento[]> {    //Puxa os agendamentos no intervalo de tempo fornecido(da semana atual, segunda a sexta)
    return this.http.get<Agendamento[]>(this.apiurl + '/agendamentosPorData/'+seg+"/"+sex)
  }

  getAgendamentosParticipante(idparticipante: number): Observable<Agendamento[]> {   //Puxa os agendamentos de um participante a partir do dia de hoje.
    return this.http.get<Agendamento[]>(this.apiurl + '/agendamentosParticipante/' + idparticipante)
  }

  getAgendamentosTerapeuta(idterapeuta: number): Observable<Agendamento[]> {   //Puxa os agendamentos de um terapeuta por id.
    return this.http.get<Agendamento[]>(this.apiurl + '/agendamentosTerapeuta/' + idterapeuta)
  }

  criarAgendamento(agendamento: Agendamento, id: number) {   //Cria um agendamento (Funcionario).
    console.log("Agendamento")
    console.log(agendamento)
    console.log("idTerapeuta")
    console.log(id)
    this.http.post(this.apiurl + '/addAgendamento/' + id, { "terapia": agendamento.terapia, "dia": agendamento.dia, "hora": agendamento.hora, "lugar": agendamento.lugar }).subscribe(res => { console.log(res) })
  }

  fazerAgendamento(idAgendamento: number, idParticipante: number) {  //Faz um agendamento (Participante) insere/altera um agendamento, adicionando o id do participante e alterando o status disponivel para nao.
    this.http.put(this.apiurl + '/fazerAgendamento/' + idAgendamento + "/" + idParticipante, {}).subscribe(res => { console.log(res) })
  }

  cancelarAgendamento(idAgendamento: number) {   //Cancela um agendamento por id (Participante).
    this.http.put(this.apiurl + '/cancelarAgendamento/' + idAgendamento, {}).subscribe(res => { console.log(res) })
  }

  editarAgendamento(agendamento: Agendamento) {    //Editar um agendamento por id (Funcionario).
    this.http.put(this.apiurl + '/editAgendamento/' + agendamento.idagendamento, { "terapia": agendamento.terapia, "dia": agendamento.dia, "hora": agendamento.hora, "lugar": agendamento.lugar }).subscribe(res => { console.log(res) })
  }

  setAgendamentoSelecionado(agendamento: Agendamento) {    //Define um agendamento no service(para ser usado entre componente, praticamente um agendamento global)
    this.agendamento = agendamento
  }

  getAgendamentoSelecionado() {    //Retorna o agendamento armazenado no service.
    return this.agendamento
  }

  removeAgendamentoSelecionado() {   //Remove o agendamento armazenado no service.
    this.agendamento = null
  }

  setAgendamentosDia(agendamento: Agendamento[]) {    //Define um agendamento no service(para ser usado entre componente, praticamente um agendamento global)
    this.agendamentosDia = agendamento
  }

  getAgendamentosDia() {    //Retorna o agendamento armazenado no service.
    return this.agendamentosDia
  }

  removeAgendamentosDia() {   //Remove o agendamento armazenado no service.
    this.agendamentosDia = null
  }

  setTerapeuta(terapeuta: Usuario){
    this.terapeuta = terapeuta
  }

  getTerapeuta(): Usuario{
    return this.terapeuta
  }

  removeTerapeuta(){
    this.terapeuta = null
  }

  setParticipante(participante: Usuario){
    this.participante = participante
  }

  getParticipante(): Usuario{
    return this.participante
  }

  removeParticipante(){
    this.participante = null;
  }

}
