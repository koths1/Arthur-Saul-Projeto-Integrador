import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../model/usuario';

@Component({
    selector: 'ngbd-dropdown-terapeuta',
    templateUrl: './dropdown-terapeuta.html'
})
export class NgbdDropdownTerapeuta {

    terapeutas: Usuario[] = []

    constructor(private usuarioService: UsuarioService) {
        this.usuarioService.getTerapeutas().subscribe(res => {
            this.terapeutas = res
        })
    }

    selecionaTerapeuta(id: number) {

        for (let i = 0; i < this.terapeutas.length; i++) {
            if (this.terapeutas[i].idusuario == id) {
                this.usuarioService.setUsuarioSelecionado(this.terapeutas[i])
            }
        }

    }

}
