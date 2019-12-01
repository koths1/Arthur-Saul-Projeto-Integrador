import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-cadastrar',
  templateUrl: './modal-cadastrar.html'
})

export class NgbdModalCadastrar {
  
  mensagem: string
  usuario: Usuario = new Usuario()
  usuarioLogado: Usuario
  tipoUsuario: string

  constructor(
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private usuarioService: UsuarioService,
    private userAuth: UserAuthService) { 

      this.usuarioLogado = this.userAuth.usuarioAtual()
      this.tipoUsuario = this.usuarioLogado.tipo
      
    }

    dismiss(){
      this.messageService.removeMessage()
      this.activeModal.dismiss()
    }

    close(){
      this.messageService.removeMessage()
      this.activeModal.close()
    }

    cadastrar(){
      if(this.tipoUsuario == "Funcionario"){
        this.usuarioService.cadastrarTerapeuta(this.usuario)
        this.mensagem = "Terapeuta cadastrado com sucesso!!!"
      }else if(this.tipoUsuario == "Administrador"){
        this.usuarioService.cadastrarFuncionario(this.usuario)
        this.mensagem = "Funcionario cadastrado com sucesso!!!"
      }else{
        this.mensagem = "Deu caca!!!"
      }
    }

}
