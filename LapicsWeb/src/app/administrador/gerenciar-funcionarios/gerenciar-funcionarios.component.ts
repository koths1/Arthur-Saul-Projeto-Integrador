import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ModalService } from 'src/app/services/modals/modal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { MessageService } from 'src/app/services/message/message.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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
  funcionarioSelecionado: Usuario = new Usuario()

  constructor(private modalService: ModalService,
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private route: Router) {
    this.cadastrar = false
    this.usuarioService.getFuncionarios().subscribe(res => {
      this.funcionarios = res
      this.funcionariosCount = this.funcionarios.length
    })
  }

  ngOnInit() {
  }

  cancelar() {
    this.cadastrar = false
  }

  cadastrarFuncionario() {
    this.modalService.openCadastrar()
    
  }

  editar(id: number){
    this.funcionarioSelecionado = this.funcionarios.find((i => i.idusuario === id));
    console.log(this.funcionarioSelecionado);
    this.usuarioService.setUsuarioSelecionado(this.funcionarioSelecionado)
    this.modalService.openEditar()
  }

  excluir(id: number){
    this.funcionarioSelecionado = this.funcionarios.find((i => i.idusuario === id));
    this.usuarioService.setUsuarioSelecionado(this.funcionarioSelecionado)
    this.modalService.openConfirmar()
  }

}
