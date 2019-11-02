import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: UserAuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.setLoggedIn(true);
  }
  

}
