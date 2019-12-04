import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { Mensagem } from 'src/app/model/mensagem';
import { EventEmitterService } from 'src/app/services/event/event-emitter.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { MessageService } from 'src/app/services/message/message.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();  //Usuário construído a partir das informações inseridas no HTML e pega pelo [(ngModel)]
  usuarioAPI: Usuario[] = []
  mensagem: Mensagem = new Mensagem(); //Mensagem existe para caso o usuário insira informações de login inválidas
  logou: boolean

  constructor(private userAuth: UserAuthService,
    private route: Router,
    private eventEmitterService: EventEmitterService,
    private modalService: ModalService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService) {
    this.mensagem.conteudo = "null";
  }

  ngOnInit() {
  }

  validaUsuario(usuario: Usuario) {    //Essa função diz que o usuário está logado e define o usuário "global" do userAuth
    this.userAuth.setLoggedIn(true, usuario);
  }

  ativaHeader() {    //Esta função executa o event emitter para podermos alterar o header
    this.eventEmitterService.onHeaderComponentActivate();
    //this.ativaHeader();
  }

  async login() {  //Login
    this.userAuth.tentaLogar(this.usuario).subscribe(res => {
      this.usuarioAPI = res
      if (this.usuarioAPI.length != 0) {
        this.spinner.show()
        this.usuario = this.usuarioAPI[0]
        this.userAuth.setLoggedIn(true, this.usuario)
        this.ativaHeader()
        this.messageService.setMessage("Bem vindo " + this.usuario.nome + " !!!")
        this.modalService.openMessage()
        setTimeout(() => {
          this.spinner.hide()
          this.route.navigateByUrl("/home")
        }, 3000)

      } else {
        this.messageService.setMessage("Email ou senha incorretos!!!")
        this.modalService.openMessage()
      }
    })


  }

}
