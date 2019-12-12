import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalMessage } from 'src/app/modal/modal-message/modal-message';
import { NgbdModalCadastrar } from 'src/app/modal/modal-cadastrar/modal-cadastrar';
import { NgbdModalAgendar } from 'src/app/modal/modal-agendar/modal-agendar';
import { NgbdModalAjustar } from 'src/app/modal/modal-ajustar/modal-ajustar';
import { NgbdModalAgendamento } from 'src/app/modal/modal-agendamento/modal-agendamento';
import { NgbdModalAta } from 'src/app/modal/modal-ata/modal-ata';
import { NgbdModalFeedback } from 'src/app/modal/modal-feedback/modal-feedback';
import { NgbdModalEditar } from 'src/app/modal/modal-editar/modal-editar';
import { NgbdModalConfirmar } from 'src/app/modal/modal-confirmar/modal-confirmar';
import { NgbdModalEditarAgendamento } from 'src/app/modal/modal-editar-agendamento/modal-editar-agendamento';
import { NgbdModalEditarAta } from 'src/app/modal/modal-editar-ata/modal-editar-ata';
import { NgbdModalEditarFeedback } from 'src/app/modal/modal-editar-feedback/modal-editar-feedback';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  //Utilizamos o modalService para chamar os modais.

  constructor(private modalCtrl: NgbModal) { }

  openMessage() {
    const modalRef = this.modalCtrl.open(NgbdModalMessage);
  }

  openAgendamento(){
    const modalRef = this.modalCtrl.open(NgbdModalAgendamento);
  }

  openAgendar(){
    const modalRef = this.modalCtrl.open(NgbdModalAgendar);
  }

  openAjustar(){
    const modalRef = this.modalCtrl.open(NgbdModalAjustar);
  }

  openCadastrar(){
    const modalRef = this.modalCtrl.open(NgbdModalCadastrar);
  }

  openAta(){
    const modalRef = this.modalCtrl.open(NgbdModalAta);
  }

  openFeedback(){
    const modalRef = this.modalCtrl.open(NgbdModalFeedback, {size: 'xl', scrollable: true});
  }

  openEditar(){
    const modalRef = this.modalCtrl.open(NgbdModalEditar)
  }

  openConfirmar(){
    const modalRef = this.modalCtrl.open(NgbdModalConfirmar)
  }

  openEditarAgendamento(){
    const modalRef = this.modalCtrl.open(NgbdModalEditarAgendamento)
  }

  openEditarAta(){
    const modalRef = this.modalCtrl.open(NgbdModalEditarAta)
  }

  openEditarFeedback(){
    const modalRef = this.modalCtrl.open(NgbdModalEditarFeedback, {size: 'xl', scrollable: true})
  }

}
