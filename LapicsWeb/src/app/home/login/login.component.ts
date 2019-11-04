import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { Mensagem } from 'src/app/model/mensagem';
import { EventEmitterService } from 'src/app/services/event/event-emitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuariosAPI: any = [];  //Array de usuários vindos do banco, veio como tipo any
  usuarios: Usuario[];  //Array de usuários que usamos para transformar o tipo any em tipo Usuario[]
  usuarioLogin: Usuario = new Usuario();  //Usuário construído a partir das informações inseridas no HTML e pega pelo [(ngModel)]
  mensagem: Mensagem = new Mensagem(); //Mensagem existe para caso o usuário insira informações de login inválidas

  constructor(private userAuth: UserAuthService,
    private route: Router,
    private eventEmitterService: EventEmitterService) { 
      this.mensagem.conteudo= "null";
    }

  ngOnInit() {
  }

  validaUsuario(usuario: Usuario){    //Essa função diz que o usuário está logado e define o usuário "global" do userAuth
    this.userAuth.setLoggedIn(true, usuario);
  }

  ativaHeader(){    //Esta função executa o event emitter para podermos alterar o header
    this.eventEmitterService.onHeaderComponentActivate();
  }
  
  login(): void{  //Login
    this.usuarios;
    this.userAuth.pegaUsuarios().subscribe((data: {}) => {    //Pegando os usuários do banco
      console.log(data);
      this.usuariosAPI = data;
      this.usuarios = this.usuariosAPI;
      console.log(this.usuarios);
      for(let i=0;i<this.usuarios.length;i++){    //Varrendo todo o array de usuários para validar o usuário tentando login
        if(this.usuariosAPI[i].email === this.usuarioLogin.email && this.usuariosAPI[i].senha === this.usuarios[i].senha){
          this.ativaHeader();
          this.validaUsuario(this.usuariosAPI[i]);
          if (this.usuariosAPI[i].tipo === "Participante") {
            this.route.navigateByUrl("/meus-horarios");
          } else if (this.usuariosAPI[i].tipo === "Terapeuta") {
            this.route.navigateByUrl("/meus-agendamentos");
          } else if (this.usuariosAPI[i].tipo === "Funcionario") {
            this.route.navigateByUrl("/terapeutas");
          } else if (this.usuariosAPI[i].tipo === "Administrador") {
            this.route.navigateByUrl("/funcionarios");
          }
        }
        else{
          this.mensagem.conteudo = "E-mail ou senha inválido. Tente novamente.";
        }
      }
    });
  };

}
