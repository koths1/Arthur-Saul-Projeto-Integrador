import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modals/modal.service';
import { Mensagem } from 'src/app/model/mensagem';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dia = new Date()
  tommorow = new Date()
  teste = new Date(new Date().setDate(new Date().getDate() - 5))

  constructor(private modalService: ModalService,
    private messageService: MessageService) {
    let curr = new Date
    let week = []

    for (let i = 1; i <= 5; i++) {
      let first = curr.getDate() - curr.getDay() + i
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
      week.push(day)
    }

    console.log("new date:")
    console.log(this.dia)
    console.log(".getDay:")
    console.log(this.dia.getDay())
    console.log(".getDate() -1:")
    console.log(this.dia.getDate() - 1)
    console.log("date -1")
    console.log(new Date().getDate() - 1)
    console.log(this.tommorow.setDate(+1))
    console.log("teste:")
    console.log(this.teste)
    console.log("Semana")
    console.log(week)
  }

  ngOnInit() {
  }

}
