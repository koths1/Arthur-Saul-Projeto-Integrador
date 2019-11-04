import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { EventEmitterService } from 'src/app/services/event/event-emitter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario; //UsuarioLogado
  usuarioLogado: boolean; //Usamos esse boolean para ativar e desativar html através do *ngIf

  constructor(private eventEmitterService: EventEmitterService,
    private userAuth: UserAuthService) { 
      this.usuarioLogado = false;
    }

  ngOnInit() {    //O event emitter declarado aqui permite o uso da função logado, que é executado quando o usuário realiza o login em outro component.
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeHeaderComponentFunction.subscribe((name:string) => {
        this.logado();
      })
    }
  }

  logado(){
    this.usuario = this.userAuth.usuarioAtual();
    this.usuarioLogado= true;
  }

  logout(){
    this.userAuth.setLoggedOut(false);
  }

}
