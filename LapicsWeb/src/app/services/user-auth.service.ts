import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLoggedIn = false;
  tipoUsuario: string;
  usuarioLogado: Usuario;
  users: Usuario[];
  apiurl = 'https://lapicsweb-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  setLoggedIn(_value, usuario: Usuario) {   //Função que faz o login e define o usuário logado "global"
    this.isLoggedIn = _value;
    this.usuarioLogado = usuario;
  }
  isAuthenticated(): boolean {    //Função que verifica se há um usuário logado.
    return this.isLoggedIn;
  }
  logout() {     //Função para fazer logout
    this.isLoggedIn = false;
    this.usuarioLogado = null;
  }
  usuarioAtual(): Usuario {    //Função que retorna o usuário "global"
    return this.usuarioLogado;
  }

  tentaLogar(usuario: Usuario): Observable<Usuario[]> {    //Buscamos por um usuário a partir de email e senha
    return this.http.get<Usuario[]>(this.apiurl + "/login/" + usuario.email + "/" + usuario.senha)
  }

  login(usuario: Usuario): boolean {   //Caso exista email e senha estejam corretos, retornamos true e armazenamos 
    this.tentaLogar(usuario).subscribe(res => {   //o usuário no service, para que o mesmo seja utilizado por qualquer classe que declare esse service.
      this.users = res
      console.log(res)
      if (this.users.length != 0) {
        this.usuarioLogado = this.users[0]
        this.isLoggedIn = true
        return true
      }
    })
    return false
  }



}
