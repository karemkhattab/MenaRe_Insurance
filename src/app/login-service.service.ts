import { Injectable } from '@angular/core';
import{ HttpClient}from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="https://localhost:7291/api/Auth/Company/Login"
    return this.http.get(url)
  }
  login(data : any){
    return this.http.post("https://localhost:7291/api/Auth/Company/Login",data)
  }

}
