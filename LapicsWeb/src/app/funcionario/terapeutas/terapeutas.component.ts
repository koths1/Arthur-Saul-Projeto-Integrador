import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ModalService } from 'src/app/services/modals/modal.service';
import { MessageService } from 'src/app/services/message/message.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-terapeutas',
  templateUrl: './terapeutas.component.html',
  styleUrls: ['./terapeutas.component.css']
})
export class TerapeutasComponent implements OnInit {

  terapeutas: Usuario[] = []
  usuario: Usuario = new Usuario()
  terapeutasCount: number
  cadastrar: boolean

  constructor(private usuarioService: UsuarioService,
    private modalService: ModalService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private route: Router) {
    this.cadastrar = false;
    this.usuarioService.getTerapeutas().subscribe(res => {
      this.terapeutas = res
      this.terapeutasCount = this.terapeutas.length
    })
  }

  ngOnInit() {
  }

  abrirCadastrar() {
    this.cadastrar = true
  }

  cancelar() {
    this.cadastrar = false
  }

  cadastrarTerapeuta() {
    //this.modalService.openCadastrar()
    try {

      this.usuarioService.cadastrarTerapeuta(this.usuario);
      this.messageService.setMessage("Terapeuta cadastrado com sucesso!!!")
      this.modalService.openMessage()  
      this.spinner.show()    
      setTimeout(() => {
        this.spinner.hide()
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.route.navigateByUrl("/terapeutas")
        })
      }, 5000)

    } catch (e) {

      this.messageService.setMessage("Falha ao cadastrar terapeuta...")
      this.modalService.openMessage()

    }

  }

}
