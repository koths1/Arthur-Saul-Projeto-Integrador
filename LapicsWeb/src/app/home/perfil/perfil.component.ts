import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;

  constructor(userAuth: UserAuthService,
    private modalService: ModalService,
    private usuarioService: UsuarioService) {
    this.usuario = userAuth.usuarioAtual();
  }

  ngOnInit() {
  }

  editar(){
    this.usuarioService.setUsuarioSelecionado(this.usuario)
    this.modalService.openEditar()
  }

}
