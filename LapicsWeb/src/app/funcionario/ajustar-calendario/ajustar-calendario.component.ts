import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals/modal.service';
import { Agendamento } from 'src/app/model/agendamento';
import { Usuario } from 'src/app/model/usuario';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ajustar-calendario',
  templateUrl: './ajustar-calendario.component.html',
  styleUrls: ['./ajustar-calendario.component.css']
})
export class AjustarCalendarioComponent implements OnInit {

  agendamentos: Agendamento[] = []
  novoAgendamento: Agendamento = new Agendamento()
  terapeutaSelecionado: Usuario
  terapeutas: Usuario[] = []
  cadastrar: boolean
  constructor(private modalService: ModalService,
    private agendamentoService: AgendamentoService,
    private usuarioService: UsuarioService) {

      this.cadastrar = false;

   }

  ngOnInit() {
  }

  abreCriar(){
    //this.modalService.openAjustar()
    this.cadastrar = true;
  }

  cancelar(){
    this.cadastrar = false;
  }

  criarAgendamento(){
    this.terapeutaSelecionado = this.usuarioService.getUsuarioSelecionado()
    this.agendamentoService.criarAgendamento(this.novoAgendamento, this.terapeutaSelecionado.idusuario)
  }

  

}
