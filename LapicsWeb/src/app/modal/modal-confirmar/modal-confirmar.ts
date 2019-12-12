import { Component, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-confirmar',
  templateUrl: './modal-confirmar.html'
})


export class NgbdModalConfirmar {

  mensagem: string
  excluiu: boolean
  naoExcluiu: boolean
  usuario: Usuario = new Usuario()
  usuarioLogado: Usuario
  tipoUsuario: string

  constructor(
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private usuarioService: UsuarioService,
    private userAuth: UserAuthService,
    private route: Router) {

    this.excluiu = false;
    this.naoExcluiu = false;
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


  excluir() {
    try {
      this.usuarioService.deletarUsuario(this.usuario)
    }
    catch (e) {
      this.mensagem = "Acesso do terapeuta removido com sucesso!";
      this.naoExcluiu = true
    }
    if (this.tipoUsuario == "Funcionario") {
      this.mensagem = "Acesso do terapeuta removido com sucesso!";
      this.excluiu = true
      setTimeout(() => {
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.close()
          this.route.navigateByUrl("/terapeutas")
        })
      }, 3000)
    } else if (this.tipoUsuario == "Administrador") {
      this.mensagem = "Acesso do funcionario removido com sucesso!";
      this.excluiu = true
      setTimeout(() => {
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.close()
          this.route.navigateByUrl("/funcionarios")
        })
      }, 3000)
    }
  }

}
