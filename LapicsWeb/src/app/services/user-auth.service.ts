import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLoggedIn = false;
  tipoUsuario: string;
  usuarioLogado: Usuario;
  users: Usuario[];

  constructor(private http: HttpClient) { }

  setLoggedIn(_value, usuario: Usuario) {   //Função que faz o login e define o usuário logado "global"
    this.isLoggedIn = _value;
    this.usuarioLogado = usuario;
  }
  isAuthenticated(): boolean {    //Função que verifica se há um usuário logado.
    return this.isLoggedIn;
  }
  setLoggedOut(_value) {     //Função para fazer logout
    this.isLoggedIn = _value;
    this.usuarioLogado = null;
  }
  usuarioAtual(): Usuario {    //Função que retorna o usuário "global"
    return this.usuarioLogado;
  }


  private endpoint = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  pegaUsuarios(): Observable<any> {
    return this.http.get(this.endpoint + "users").pipe(
      map(this.extractData));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log('${operation} failed: ${error.message}');

      return of(result as T);
    };
  }

  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } */


  /*pegaUsuarios(): void{
    this.users = this.getUsers().subscribe();
  }
  
  getUsers(): Observable<Usuario[]>{
    //Alteramos para enviar os heroes por GET HTTP
    // TODO: send the messa _after_fetching the heroes
    return this.http.get<Usuario[]>(this.apiUrl+"/users").pipe(
      tap(_ => this.log('Pegamos os usuários')),
      catchError(this.handleError<Usuario[]>('users', [])));//retorna um JSON mas pelo uso de HERO[] retorna objetos do tipo hero
  }
  
  private log(message: string){
    console.log('${message}');
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } */

}
