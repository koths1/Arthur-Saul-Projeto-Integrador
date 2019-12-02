import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ModalService } from 'src/app/services/modals/modal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { MessageService } from 'src/app/services/message/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-funcionarios',
  templateUrl: './gerenciar-funcionarios.component.html',
  styleUrls: ['./gerenciar-funcionarios.component.css']
})
export class GerenciarFuncionariosComponent implements OnInit {

  funcionarios: Usuario[];
  usuario: Usuario = new Usuario()
  funcionariosCount: number
  cadastrar: boolean

  constructor(private modalService: ModalService,
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private route: Router) {
      this.cadastrar = false
      this.usuarioService.getFuncionarios().subscribe(res => {
        this.funcionarios = res
        this.funcionariosCount = this.funcionarios.length
      })
     }

  ngOnInit() {
  }

  abrirCadastrar() {
    this.cadastrar = true
  }

  cancelar() {
    this.cadastrar = false
  }

  cadastrarFuncionario() {
    //this.modalService.openCadastrar()
    try {

      this.usuarioService.cadastrarFuncionario(this.usuario);
      this.messageService.setMessage("Funcionario cadastrado com sucesso!!!")
      this.modalService.openMessage()
      setTimeout( ()=>{
        this.route.navigateByUrl("/funcionarios")
        }, 5000)

    } catch (e) {

      this.messageService.setMessage("Falha ao cadastrar funcionarios...")
      this.modalService.openMessage()

    }
    this.route.navigateByUrl('/', { skipLocationChange: true}).then(() =>{
      this.route.navigateByUrl("/funcionarios")
    })
  }

}
