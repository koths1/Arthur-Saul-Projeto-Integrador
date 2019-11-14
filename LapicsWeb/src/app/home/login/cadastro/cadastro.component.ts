import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  usuario: Usuario = new Usuario();

  ngOnInit() {
  }

  cadastro(){
    try{
      this.usuarioService.cadastraUsuario(this.usuario);
    }catch{
      
    }
    
  }

}
