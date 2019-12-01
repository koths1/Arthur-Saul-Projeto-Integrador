import { Component, AfterViewInit } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'ngbd-modal-message',
  templateUrl: './modal-message.html'
})
export class NgbdModalMessage implements AfterViewInit {

  mensagem: string

  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private messageService: MessageService) {

    this.mensagem = this.messageService.getMessage()

  }

  dismiss() {
    this.messageService.removeMessage()
    this.activeModal.dismiss()
  }

  close() {
    this.messageService.removeMessage()
    this.activeModal.close()
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('works')
      this.close()
    }, 3000)
  }

}
