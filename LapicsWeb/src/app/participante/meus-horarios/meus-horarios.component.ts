import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/model/Agendamento';

@Component({
  selector: 'app-meus-horarios',
  templateUrl: './meus-horarios.component.html',
  styleUrls: ['./meus-horarios.component.css']
})
export class MeusHorariosComponent implements OnInit {

  agendamentos: Agendamento[];

  constructor() { }

  ngOnInit() {
  }

}
