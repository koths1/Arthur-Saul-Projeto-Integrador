import { Injectable } from '@angular/core';
import { FormPesquisa } from 'src/app/model/formPesquisa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  private apiUrl = "https://lapicsweb-api.herokuapp.com";

  public getPreencheu(idUsuario: number): Observable<FormPesquisa[]> {   //Verificamos se um usuario preencheu o formulario de pesquisa, buscando por id um formulario
    return this.http.get<FormPesquisa[]>(this.apiUrl + "/preencheu/" + idUsuario)   //Se ele preencheu, teremos pelo menos 1 resultado nessa busca
  }

  public createFormulario(formulario: FormPesquisa,id: number) {    //Participante preenche formulário, enviamos o formulario completo no body do http para a api
    this.http.post(this.apiUrl + '/addFormulario/'+id, {
      'idParticipante': formulario.idparticipante, 'nome': formulario.nome,
      'sexo': formulario.sexo, 'idade': formulario.idade, 'dataNasc': formulario.datanasc,
      'telefone': formulario.telefone, 'naturalidade': formulario.naturalidade, 'profissao': formulario.profissao,
      'religiao': formulario.religiao, 'indicacao': formulario.indicacao, 'pergunta1': formulario.pergunta1,
      'pergunta2': formulario.pergunta2, 'pergunta3': formulario.pergunta3, 'pergunta4': formulario.pergunta4,
      'pergunta5': formulario.pergunta5, 'pergunta6': formulario.pergunta6, 'pergunta7': formulario.pergunta7,
      'pergunta7obs': formulario.pergunta7obs, 'pergunta8': formulario.pergunta8, 'pergunta8obs': formulario.pergunta8obs,
      'pergunta9a': formulario.pergunta9a, 'pergunta9b': formulario.pergunta9b, 'pergunta9c': formulario.pergunta9c,
      'pergunta9d': formulario.pergunta9d, 'pergunta10a': formulario.pergunta10a, 'pergunta10b': formulario.pergunta10b,
      'pergunta10c': formulario.pergunta10c, 'pergunta10d': formulario.pergunta10d, 'pergunta11': formulario.pergunta11,
      'pergunta12': formulario.pergunta12, 'pergunta13': formulario.pergunta13, 'pergunta14': formulario.pergunta14,
      'pergunta15': formulario.pergunta15, 'pergunta15quais': formulario.pergunta15quais, 'pergunta16': formulario.pergunta16,
      'pergunta17': formulario.pergunta17, 'pergunta17outras': formulario.pergunta17outras,
    }).subscribe(res => console.log(res))
  }

  public putFormulario(formulario: FormPesquisa) {   //Editar um formulario por id
    this.http.put(this.apiUrl + '/editFormulario/' + formulario.idformulario, { "": "" }).subscribe(res => console.log(res))
  }

}
