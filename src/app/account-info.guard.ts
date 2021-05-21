import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoGuard implements Resolve<any> {
  
  //Call service API to get details
  /*
    this.userService.getAccountInfo(userId).subscribe(data => {

    });
  */
  
  userObj = {
    userId:10,
    username:'User'
  };

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userObj;
  }  
}
