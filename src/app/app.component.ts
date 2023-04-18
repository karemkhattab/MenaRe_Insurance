import { Component } from '@angular/core';
import { LoginServiceService} from './Sevrices/Login/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MenaRe_Insurance';
  constructor(private loginservice:LoginServiceService){

  }

  login(data:any){

    console.warn(data)
    this.loginservice.login(data).subscribe((result)=>
    {
      console.warn(result)


    })
  }

}
