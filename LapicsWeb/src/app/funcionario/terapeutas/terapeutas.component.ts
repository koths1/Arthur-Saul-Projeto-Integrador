import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { MessageService } from 'src/app/services/message/message.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-terapeutas',
  templateUrl: './terapeutas.component.html',
  styleUrls: ['./terapeutas.component.css']
})
export class TerapeutasComponent implements OnInit {

  terapeutas: Usuario[] = []
  terapeutaSelecionado: Usuario
  usuario: Usuario = new Usuario()
  terapeutasCount: number
  cadastrar: boolean

  constructor(private usuarioService: UsuarioService,
    private modalService: ModalService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private route: Router) {
    this.cadastrar = false;
    this.usuarioService.getTerapeutas().subscribe(res => {
      this.terapeutas = res
      this.terapeutasCount = this.terapeutas.length
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

  cadastrarTerapeuta() {
    this.modalService.openCadastrar()   
  }

  editar(id: number){
    this.terapeutaSelecionado = this.terapeutas.find((i => i.idusuario === id));
    console.log(this.terapeutaSelecionado);
    this.usuarioService.setUsuarioSelecionado(this.terapeutaSelecionado)
    this.modalService.openEditar()
  }

  excluir(id: number){
    this.terapeutaSelecionado = this.terapeutas.find((i => i.idusuario === id));
    this.usuarioService.setUsuarioSelecionado(this.terapeutaSelecionado)
    this.modalService.openConfirmar()
  }

}
