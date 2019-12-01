import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { MessageService } from 'src/app/services/message/message.service';
import { ModalService } from 'src/app/services/modals/modal.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private modalService: ModalService,
    private messageService: MessageService) { }

  usuario: Usuario = new Usuario();

  ngOnInit() {
  }

  cadastro(){
    try{
      this.usuarioService.cadastrarParticipante(this.usuario);
      this.messageService.setMessage("Cadastro realizado com sucesso!!!")
      this.modalService.openMessage()
    }catch{
      this.messageService.setMessage("Falha no cadastro!!!")
      this.modalService.openMessage()
    }
    
  }

}
