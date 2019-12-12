import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-editar',
  templateUrl: './modal-editar.html'
})


export class NgbdModalEditar {

  mensagem: string
  editou: boolean
  naoEditou: boolean
  usuario: Usuario = new Usuario()
  usuarioLogado: Usuario
  tipoUsuario: string

  constructor(
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private usuarioService: UsuarioService,
    private userAuth: UserAuthService,
    private route: Router) {

    this.editou = false;
    this.naoEditou = false;
    this.usuarioLogado = this.userAuth.usuarioAtual()
    this.tipoUsuario = this.usuarioLogado.tipo
    this.usuario = this.usuarioService.getUsuarioSelecionado()

  }

  dismiss() {
    this.messageService.removeMessage()
    this.usuarioService.removeUsuarioSelecionado()
    this.activeModal.dismiss()
  }

  close() {
    this.messageService.removeMessage()
    this.usuarioService.removeUsuarioSelecionado()
    this.activeModal.close()
  }

  editar() {
    this.usuario.email = (<HTMLSelectElement>document.getElementById('email')).value
    this.usuario.senha = (<HTMLSelectElement>document.getElementById('senha')).value
    this.usuario.nome = (<HTMLSelectElement>document.getElementById('nome')).value
    this.usuario.cpf = (<HTMLSelectElement>document.getElementById('cpf')).value
    console.log("Editando o usuário:")
    console.log(this.usuario)
    try {
      this.usuarioService.editarUsuario(this.usuario)
    } catch (e) {
      this.naoEditou = true;
    }
    if (this.tipoUsuario == "Funcionario") {
      this.mensagem = "Terapeuta editado com sucesso!";
      this.editou = true
      setTimeout(() => {
        this.close()
      }, 3000)
    } else if (this.tipoUsuario == "Administrador") {
      this.mensagem = "Funcionario editado com sucesso!";
      this.editou = true
      setTimeout(() => {
        this.close()
      }, 3000)
    } else if (this.tipoUsuario == "Participante") {
      this.mensagem = "Dados alterados com sucesso!";
      this.editou = true
      setTimeout(() => {
        this.close()
      }, 3000)
    }else if (this.tipoUsuario == "Terapeuta") {
      this.mensagem = "Dados alterados com sucesso!";
      this.editou = true
      setTimeout(() => {
        this.close()
      }, 3000)
    }

  }

  excluir() {
    this.usuarioService.deletarUsuario(this.usuario)
  }

}
