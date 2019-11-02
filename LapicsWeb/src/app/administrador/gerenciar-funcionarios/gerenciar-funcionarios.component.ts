import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-gerenciar-funcionarios',
  templateUrl: './gerenciar-funcionarios.component.html',
  styleUrls: ['./gerenciar-funcionarios.component.css']
})
export class GerenciarFuncionariosComponent implements OnInit {

  funcionarios: Usuario[];

  constructor() { }

  ngOnInit() {
  }

}
