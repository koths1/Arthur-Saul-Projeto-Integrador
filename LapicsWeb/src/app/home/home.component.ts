import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios: any = [];
  usuariosReal: Usuario[];


  constructor(public userAuth: UserAuthService) { }

  ngOnInit() {
  }

  pegaUsuarios(): void {
    this.usuarios;
    this.userAuth.pegaUsuarios().subscribe((data: {}) => {
      console.log(data);
      this.usuarios = data;
      this.usuariosReal = this.usuarios;
      console.log(this.usuariosReal);
    });
  };

}
