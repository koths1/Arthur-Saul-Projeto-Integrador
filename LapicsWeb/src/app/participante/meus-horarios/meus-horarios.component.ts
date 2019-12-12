import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Usuario } from 'src/app/model/usuario';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';
import { Feedback } from 'src/app/model/feedback';
import { MessageService } from 'src/app/services/message/message.service';
import { ModalService } from 'src/app/services/modals/modal.service';

@Component({
  selector: 'app-meus-horarios',
  templateUrl: './meus-horarios.component.html',
  styleUrls: ['./meus-horarios.component.css']
})
export class MeusHorariosComponent implements OnInit {

  agendamentos: Agendamento[];
  agendamentosCount: number
  agendamentoFeedback: Agendamento
  terapeutas: Usuario[] = []
  terapeuta: Usuario
  participantes: Usuario[] = []
  participante: Usuario
  usuario: Usuario
  feedbackApi: Feedback[] = []
  feedback: Feedback

  constructor(private usuarioService: UsuarioService,
    private userAuth: UserAuthService,
    private agendamentoService: AgendamentoService,
    private feedbackService: FeedbackService,
    private messageService: MessageService,
    private modalService: ModalService,
    private spinner: NgxSpinnerService) {
    this.usuario = this.userAuth.usuarioAtual()
    this.agendamentoService.getAgendamentosParticipante(this.usuario.idusuario).subscribe(res => {
      this.agendamentos = res;
      this.agendamentosCount = this.agendamentos.length
    })
  }

  ngOnInit() {
  }

  verFeedback(id: number){
    for(let i=0; i<this.agendamentos.length; i++){
      if(this.agendamentos[i].idagendamento == id){
        this.agendamentoFeedback = this.agendamentos[i]
        this.agendamentoService.setAgendamentoSelecionado(this.agendamentos[i])
      }
    }
    this.usuarioService.getUsuario(this.agendamentoFeedback.idterapeuta).subscribe( res=> {
      this.terapeutas = res
      this.terapeuta = this.terapeutas[0]          
      this.agendamentoService.setTerapeuta(this.terapeuta)
    })
    this.usuarioService.getUsuario(this.agendamentoFeedback.idparticipante).subscribe( res => {
      this.participantes = res
      this.participante = this.participantes[0]
      this.agendamentoService.setParticipante(this.participante)
    })     
    this.feedbackService.getFeedbackByAgendamento(id).subscribe( res => {
      this.feedbackApi = res
      if(this.feedbackApi.length != 0){
        this.feedbackService.setFeedbackSelecionado(this.feedbackApi[0])
        this.modalService.openEditarFeedback()
      }else if(this.feedbackApi.length == 0){
        this.modalService.openFeedback()        
      }
    })
  }

  cancelarAgendamento(idAgendamento: number) {
    this.agendamentoService.cancelarAgendamento(idAgendamento)
  }

}
