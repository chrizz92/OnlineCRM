import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  a = 0;
  b = 0;
  canEnter = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.a = 10;
      this.b = 20;

      //Call an HTTP call to Backend API and get Auth Token for User

      if(this.a>this.b){
        this.canEnter = true;
      }else{
        this.canEnter = false;
      }   
      return this.canEnter;
  }
  
}
