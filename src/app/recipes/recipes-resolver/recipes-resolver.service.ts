import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RecipeResolved} from '../recipe';
import {Observable, of} from 'rxjs';
import {RecipeService} from '../recipe.service';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<RecipeResolved>{

  constructor(private recipeService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)){
      const message = `Recette introuvable pour l'identifiant: ${id}`;
      return of({recipe: null, error: message});
    }
    return this.recipeService.getRecipe(+id).pipe(
      map(result => ({recipe : result})),
      catchError (err => {
        const message = `Une erreur s'est produite lors de la recherche de la recette: ${JSON.stringify(err.body)}`;
        return of({recipe: null, error: message});
      })
    );
  }
}
