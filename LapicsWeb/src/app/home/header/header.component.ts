import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { EventEmitterService } from 'src/app/services/event/event-emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario; //UsuarioLogado
  usuarioLogado: boolean; //Usamos esse boolean para ativar e desativar html através do *ngIf
  tipoUsuario: string

  constructor(private eventEmitterService: EventEmitterService,
    private userAuth: UserAuthService,
    private route: Router) {
    this.usuarioLogado = false;
  }

  ngOnInit() {    //O event emitter declarado aqui permite o uso da função logado, que é executado quando o usuário realiza o login em outro component.
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeHeaderComponentFunction.subscribe((name: string) => {
        if (this.usuarioLogado == false) {
          this.logado();  
        }else{
          this.logout();
        }
        
      })
    }

  }

  logado() {
    this.usuario = this.userAuth.usuarioAtual();
    this.usuarioLogado = true;
    this.tipoUsuario = this.usuario.tipo;
  }

  logout() {
    this.usuarioLogado = false;
    this.tipoUsuario = null;
    this.userAuth.logout();
    this.route.navigateByUrl("/home")
  }

}
