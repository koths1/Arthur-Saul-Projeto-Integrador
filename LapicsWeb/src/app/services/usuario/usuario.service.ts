import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  private url = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  cadastraUsuario(user: Usuario){
    console.log("Entrou no cadastraUsusuario")
    console.log(this.url+'userParticipante')
    console.log(user)
    this.http.post(this.url+'userParticipante',{'email':user.email,'senha':user.senha,'nome':user.nome,'CPF':user.CPF},this.httpOptions).subscribe(res => console.log(res))
    //"email="+user.email+"&senha="+user.senha+"&nome="+user.nome+"&CPF="+user.CPF
    //{'email':user.email,'senha':user.senha,'nome':user.nome,'CPF':user.CPF}
    //o subscribe faz rodar!!! com ,{responseType: "text"} não da parsing error
  }

  editarUsuario(){

  }

  deletaUsuario(){

  }

}
