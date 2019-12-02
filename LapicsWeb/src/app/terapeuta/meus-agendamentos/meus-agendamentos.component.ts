import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { Agendamento } from 'src/app/model/agendamento';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrls: ['./meus-agendamentos.component.css']
})
export class MeusAgendamentosComponent implements OnInit {

  agendamentos: Agendamento[] = []
  agendamentosCount: number
  usuario: Usuario

  constructor(private usuarioService: UsuarioService,
    private http: HttpClient,
    private userAuth: UserAuthService,
    private agendamentoService: AgendamentoService) {
    this.usuario = userAuth.usuarioLogado
    this.agendamentoService.getAgendamentosTerapeuta(this.usuario.idusuario).subscribe( res =>{
      this.agendamentos = res
    })
  }

  ngOnInit() {
  }

}
