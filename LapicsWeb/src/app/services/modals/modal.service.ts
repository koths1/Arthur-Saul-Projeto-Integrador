import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from 'src/app/modal/modal-basic';
import { NgbdModalMessage } from 'src/app/modal/modal-message/modal-message';
import { NgbdModalCadastrar } from 'src/app/modal/modal-cadastrar/modal-cadastrar';
import { NgbdModalAgendar } from 'src/app/modal/modal-agendar/modal-agendar';
import { NgbdModalAjustar } from 'src/app/modal/modal-ajustar/modal-ajustar';
import { NgbdModalAgendamento } from 'src/app/modal/modal-agendamento/modal-agendamento';
import { NgbdModalAta } from 'src/app/modal/modal-ata/modal-ata';
import { NgbdModalFeedback } from 'src/app/modal/modal-feedback/modal-feedback';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  //Utilizamos o modalService para chamar os modais.

  constructor(private modalCtrl: NgbModal) { }

  openBasic() {
    const modalRef = this.modalCtrl.open(NgbdModalBasic);
  }

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

}
