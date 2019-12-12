import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-cadastrar',
  templateUrl: './modal-cadastrar.html'
})


export class NgbdModalCadastrar {
  
  mensagem: string
  cadastrou: boolean
  naoCadastrou: boolean
  usuario: Usuario = new Usuario()
  usuarioLogado: Usuario
  tipoUsuario: string

  constructor(
    public activeModal: NgbActiveModal,
    private messageService: MessageService,
    private usuarioService: UsuarioService,
    private userAuth: UserAuthService,
    private route: Router) { 

      this.cadastrou = false;
      this.naoCadastrou = false;
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
      this.usuario.email = (<HTMLSelectElement>document.getElementById('email')).value
      this.usuario.senha = (<HTMLSelectElement>document.getElementById('senha')).value
      this.usuario.nome = (<HTMLSelectElement>document.getElementById('nome')).value
      this.usuario.cpf = (<HTMLSelectElement>document.getElementById('cpf')).value
      if(this.tipoUsuario == "Funcionario"){
        console.log("Sou um "+ this.tipoUsuario+" e quero cadastrar o Terapeuta:")
        console.log(this.usuario)
        this.usuarioService.cadastrarTerapeuta(this.usuario)
        this.mensagem = "Terapeuta cadastrado com sucesso!!!"
        this.cadastrou = true;
        setTimeout(() => {
          this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.close()
            this.route.navigateByUrl("/terapeutas")
          })
        }, 3000)

      }else if(this.tipoUsuario == "Administrador"){
        console.log("Sou um "+ this.tipoUsuario+" e quero cadastrar o funcionario:")
        console.log(this.usuario)
        this.usuarioService.cadastrarFuncionario(this.usuario)
        this.mensagem = "Funcionario cadastrado com sucesso!!!"
        this.cadastrou = true;
        setTimeout(() => {
          this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.close()
            this.route.navigateByUrl("/funcionarios")
          })
        }, 3000)

      }else{
        this.mensagem = "Deu cacaaaaaaa"
        this.naoCadastrou = true;
      }
      
      
    }

}
