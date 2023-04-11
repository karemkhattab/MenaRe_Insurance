import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MenaRe_Insurance';
  constructor(private loginservice:LoginServiceService){
    this.loginservice.getData().subscribe(data=>{
      console.warn(data)
    })
  }

  getUserFormData(data:any){
    console.warn(data)
    this.loginservice.login(data)
  }

}
