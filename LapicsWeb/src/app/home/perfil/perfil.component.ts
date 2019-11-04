import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;

  constructor( userAuth: UserAuthService) { 
    this.usuario = userAuth.usuarioAtual();
  }

  ngOnInit() {
  }

}
