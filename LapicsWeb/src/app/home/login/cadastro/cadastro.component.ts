import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { MessageService } from 'src/app/services/message/message.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { EventEmitterService } from 'src/app/services/event/event-emitter.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarioAPI: Usuario[] = []

  constructor(private usuarioService: UsuarioService,
    private userAuth: UserAuthService,
    private eventEmitterService: EventEmitterService,
    private modalService: ModalService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private route: Router) { }

  usuario: Usuario = new Usuario();

  ngOnInit() {
  }

  ativaHeader() {    //Esta função executa o event emitter para podermos alterar o header
    this.eventEmitterService.onHeaderComponentActivate();
    //this.ativaHeader();
  }

  cadastro() {
    try {
      this.spinner.show()
      this.usuarioService.cadastrarParticipante(this.usuario);
      this.messageService.setMessage("Cadastro realizado com sucesso!!!")
      this.modalService.openMessage()
      setTimeout(() => {
        this.userAuth.tentaLogar(this.usuario).subscribe(res => {
          this.usuarioAPI = res
          if (this.usuarioAPI.length != 0) {
            this.usuario = this.usuarioAPI[0]
          }
          this.messageService.setMessage("Bem-vindo " + this.usuario.nome + "!!!")
          this.modalService.openMessage()
          this.spinner.hide()
          this.userAuth.setLoggedIn(true, this.usuario)
          this.ativaHeader()
          this.route.navigateByUrl("/home")
        })
      }, 5000)
    } catch{
      this.messageService.setMessage("Falha no cadastro!!!")
      this.modalService.openMessage()
    }

  }

}
