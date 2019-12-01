import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Usuario } from 'src/app/model/usuario';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';

@Component({
  selector: 'app-meus-horarios',
  templateUrl: './meus-horarios.component.html',
  styleUrls: ['./meus-horarios.component.css']
})
export class MeusHorariosComponent implements OnInit {

  agendamentos: Agendamento[];
  agendamentosCount: number
  usuario: Usuario

  constructor(private usuarioService: UsuarioService,
    private userAuth: UserAuthService,
    private agendamentoService: AgendamentoService) {
    this.usuario = this.userAuth.usuarioAtual()
    this.agendamentoService.getAgendamentosParticipante(this.usuario.idusuario).subscribe(res => {
      this.agendamentos = res;
      this.agendamentosCount = this.agendamentos.length
    })
  }

  ngOnInit() {
  }

  cancelarAgendamento(idAgendamento: number) {
    this.agendamentoService.cancelarAgendamento(idAgendamento)
  }

}
