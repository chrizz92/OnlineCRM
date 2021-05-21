import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchComponent } from './search/search.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<SearchComponent> {
  canDeactivate(component: SearchComponent){
    if(component.isDirty){
      return window.confirm("There are unsaved changes. Are you sure to leave?");
    }
    return true;//Only if confirmation is answerd with yes or component is not dirty
  }
  
}
