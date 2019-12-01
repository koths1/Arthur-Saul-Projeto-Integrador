import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Agendamento } from 'src/app/model/agendamento';
import { Usuario } from 'src/app/model/usuario';
import { FormPesquisa } from 'src/app/model/formPesquisa';
import { FormularioService } from 'src/app/services/formPesquisa/formulario.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  agendamentos: Agendamento[] = []
  agSegunda: Agendamento[] = []
  agTerca: Agendamento[] = []
  agQuarta: Agendamento[] = []
  agQuinta: Agendamento[] = []
  agSexta: Agendamento[] = []
  agSegundaCount: number
  agTercaCount: number
  agQuartaCount: number
  agQuintaCount: number
  agSextaCount: number
  usuario: Usuario
  formulario: FormPesquisa[] = []
  agendamentosCount: number

  constructor(private agendamentoService: AgendamentoService,
    private userAuth: UserAuthService,
    private formularioService: FormularioService,
    private modalService: ModalService,
    private usuarioService: UsuarioService,
    private route: Router) {
    this.usuario = this.userAuth.usuarioAtual()
    //Problemas com o preenchimento do formulario, por isso essa parte está comentada
    /*this.formularioService.getPreencheu(this.usuario.idusuario).subscribe(res =>{
      this.formulario = res;
      if(this.formulario.length == 0){
        this.route.navigateByUrl("/formulario-pesquisa")
      }
    })*/
    let curr = new Date
    let week = []

    for (let i = 1; i <= 5; i++) {
      let first = curr.getDate() - curr.getDay() + i
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      week.push(day)
    }
    this.agendamentoService.getProxAgendamentos().subscribe( res =>{
      this.agendamentos = res;
      this.agendamentosCount = this.agendamentos.length
    })
  }

  ngOnInit() {
  }

  agendamentoSelecionado(){
    this.modalService.openAgendamento()
  }

}
