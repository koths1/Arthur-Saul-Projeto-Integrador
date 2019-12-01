import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
import { EventEmitterService } from '../services/event/event-emitter.service';

@Component({
    selector: 'ngbd-dropdown-usuario',
    templateUrl: './dropdown-usuario.html'
})
export class NgbdDropdownUsuario {

    usuario: Usuario

    constructor(private userAuth: UserAuthService,
        private route: Router,
        private eventEmitterService: EventEmitterService) {
        
        this.usuario = this.userAuth.usuarioAtual()

    }

    logout(){
        this.eventEmitterService.onHeaderComponentActivate();
    }

    perfil(){
        this.route.navigateByUrl("/perfil")
    }

}
