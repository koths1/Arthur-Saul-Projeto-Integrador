import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ModalService } from 'src/app/services/modals/modal.service';

@Component({
  selector: 'app-gerenciar-funcionarios',
  templateUrl: './gerenciar-funcionarios.component.html',
  styleUrls: ['./gerenciar-funcionarios.component.css']
})
export class GerenciarFuncionariosComponent implements OnInit {

  funcionarios: Usuario[];

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  cadastrarFuncionario(){
    this.modalService.openCadastrar()
  }

}
