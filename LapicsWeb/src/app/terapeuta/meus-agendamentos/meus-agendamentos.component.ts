import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { Agendamento } from 'src/app/model/agendamento';
import { Usuario } from 'src/app/model/usuario';
import { AtaService } from 'src/app/services/ata/ata.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Ata } from 'src/app/model/ata';
import { MessageService } from 'src/app/services/message/message.service';
import { ModalService } from 'src/app/services/modals/modal.service';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrls: ['./meus-agendamentos.component.css']
})
export class MeusAgendamentosComponent implements OnInit {

  agendamentos: Agendamento[] = []
  agendamentoAta: Agendamento
  agendamentosCount: number
  terapeutas: Usuario[] = []
  terapeuta: Usuario
  participantes: Usuario[] = []
  participante
  usuario: Usuario
  ata: Ata
  ataApi: Ata[]

  constructor(private usuarioService: UsuarioService,
    private userAuth: UserAuthService,
    private agendamentoService: AgendamentoService,
    private ataService: AtaService,
    private messageService: MessageService,
    private modalService: ModalService,
    private spinner: NgxSpinnerService) {
    this.usuario = userAuth.usuarioLogado   //Pegamos o usuário armazenado no userAuthService
    this.agendamentoService.getAgendamentosTerapeuta(this.usuario.idusuario).subscribe( res =>{
      this.agendamentos = res   //Tras os agendamentos referentes à este terapeuta(somente agendamentos onde já existem participantes)
    })
  }

  verAta(id: number){
    for(let i=0; i<this.agendamentos.length; i++){
      if(this.agendamentos[i].idagendamento == id){
        this.agendamentoAta = this.agendamentos[i]
        this.agendamentoService.setAgendamentoSelecionado(this.agendamentos[i])
      }
    }
    this.usuarioService.getUsuario(this.agendamentoAta.idterapeuta).subscribe( res=> {
      this.terapeutas = res
      this.terapeuta = this.terapeutas[0]          
      this.agendamentoService.setTerapeuta(this.terapeuta)
    })
    this.usuarioService.getUsuario(this.agendamentoAta.idparticipante).subscribe( res => {
      this.participantes = res
      this.participante = this.participantes[0]
      this.agendamentoService.setParticipante(this.participante)
    })     
    this.ataService.getAtaByAgendamento(id).subscribe( res => {
      this.ataApi = res
      if(this.ataApi.length != 0){
        this.spinner.show()
        this.messageService.setMessage("A ata para este agendamento já foi preenchida. :)")
        this.modalService.openMessage()
        setTimeout(() => {
          this.spinner.hide()
        }, 3000)
      }else if(this.ataApi.length == 0){
        this.modalService.openAta()        
      }
    })
  }

  ngOnInit() {
  }

}
