import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/authGuard.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthGuardService) { }

  ngOnInit() {
  }

}
