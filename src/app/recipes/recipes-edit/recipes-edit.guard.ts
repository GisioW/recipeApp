import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {RecipesEditComponent} from './recipes-edit.component';

@Injectable({
  providedIn: 'root'
})
export class RecipesEditGuard implements CanDeactivate<RecipesEditComponent> {

  canDeactivate(component: RecipesEditComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isDirty){
      const name = component.recipe.recipeName || 'Nouvelle recette';
      return confirm('Des modifications son en cours sur ' + name + ', ils seront perdu vous êtes sur de votre action?');
    }
    return true;
  }
}
