import { Component } from '@angular/core';
import { LoginServiceService } from '../Sevrices/Login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'MenaRe_Insurance';
  constructor(private loginservice: LoginServiceService) {
    this.IsLogged()
  }

  login(data: any) {
    localStorage.setItem("user", JSON.stringify(data));
    console.log(JSON.stringify(data))
    this.loginservice.login(data).subscribe((result) => {


    });
  }
  IsLogged() {
    if (localStorage.hasOwnProperty('user')) {
      let user = localStorage.getItem('user');
      console.log(user);
    }
  }
}
