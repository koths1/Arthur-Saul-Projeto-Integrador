import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  private apiurl = 'https://lapicsweb-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {   //Puxando os usuários
    return this.http.get<Usuario[]>(this.apiurl + '/usuarios')
  }

  getUsuario(id: number): Observable<Usuario[]> {  //Puxando um usuário por id
    return this.http.get<Usuario[]>(this.apiurl + '/usuarios/' + id)
  }

  getParticipantes(): Observable<Usuario[]> {  //Puxando os usuários do tipo Participante
    return this.http.get<Usuario[]>(this.apiurl + '/participantes')
  }

  getTerapeutas(): Observable<Usuario[]> { //Puxando os usuários do tipo Terapeuta
    return this.http.get<Usuario[]>(this.apiurl + '/terapeutas')
  }

  getFuncionarios(): Observable<Usuario[]> { //Puxando os usuários do tipo Funcionario
    return this.http.get<Usuario[]>(this.apiurl + '/funcionarios')
  }

  cadastrarParticipante(usuario: Usuario) { //Estamos cadastrando um usuário do tipo Participante por http
    this.http.post(this.apiurl + '/addParticipante', { 'email': usuario.email, 'senha': usuario.senha, 'nome': usuario.nome, 'CPF': usuario.cpf }).subscribe(res => console.log(res))
  }

  cadastrarTerapeuta(usuario: Usuario) {  //Estamos cadastrando um usuário do tipo Terapeuta por http
    this.http.post(this.apiurl + '/addTerapeuta', { 'email': usuario.email, 'senha': usuario.senha, 'nome': usuario.nome, 'CPF': usuario.cpf }).subscribe(res => console.log(res))
  }

  cadastrarFuncionario(usuario: Usuario) {  //Estamos cadastrando um usuário do tipo Funcionario por http
    this.http.post(this.apiurl + '/addFuncionario', { 'email': usuario.email, 'senha': usuario.senha, 'nome': usuario.nome, 'CPF': usuario.cpf }).subscribe(res => console.log(res))
  }

  editarUsuario(usuario: Usuario) { //Editando um usuário por id utilizando http
    this.http.put(this.apiurl + '/editUsuario/' + usuario.idusuario, { 'email': usuario.email, 'senha': usuario.senha, 'nome': usuario.nome, 'CPF': usuario.cpf }).subscribe(res => console.log(res))
  }

  deletarUsuario(usuario: Usuario) { //Removendo o acesso de um usuário por id utilizando http
    this.http.put(this.apiurl + '/deleteUsuario/' + usuario.idusuario, { 'email': usuario.email, 'senha': usuario.senha, 'nome': usuario.nome, 'CPF': usuario.cpf }).subscribe(res => console.log(res))
  }

  setUsuarioSelecionado(usuario: Usuario) {    //Define um usuário armazenado no service.
    this.usuario = usuario
  }

  getUsuarioSelecionado(): Usuario {   //Retorna o usuário armazenado no service.
    return this.usuario
  }

  removeUsuarioSelecionado() {   //Remove o usuário armazenado no service.
    this.usuario = null
  }


}
