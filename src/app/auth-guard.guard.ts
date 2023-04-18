import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './Sevrices/Login/login-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard  {
constructor(private _loginservice:LoginServiceService , private _router:Router  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._loginservice.IsLogged())
      {return true;}
    this._router.navigate(['/login']);
    return false

  }

}
