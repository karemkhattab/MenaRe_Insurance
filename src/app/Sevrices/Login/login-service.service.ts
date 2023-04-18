import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders}from "@angular/common/http"
import  *  as CryptoJS from  'crypto-js';


@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor(private http:HttpClient) { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  url="https://dummyjson.com/auth/login"
  getData(){
    let url="https://dummyjson.com/auth/login"
    return this.http.get(url)
  }


  login(data : any){
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

return this.http.post("https://d918-45-241-11-65.ngrok-free.app/api/Auth/Company/Login",JSON.stringify(data),config)
  }

  IsLogged() {

       return localStorage.hasOwnProperty('user')

  }
}
