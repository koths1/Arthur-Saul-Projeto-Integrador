import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userAuth: UserAuthService) { }

  ngOnInit() {
  }

}
