import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IRecipe } from './recipe';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService{

  private recipeUrl = 'api/recipes';

  categories = ['Végan','Végétarien','Omnivore']

  constructor(private http: HttpClient){}


  getCategories(): Observable<string[]>{
    return of(this.categories);
  }

  getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(this.recipeUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }

  getRecipe(id: number): Observable<IRecipe>{
    if(id === 0){
      return of(this.initializeRecipe());
    }else{
      const url = `${this.recipeUrl}/${id}`;
      return this.http.get<IRecipe>(url)
                .pipe(tap(data => console.log('getRecipe : ' + JSON.stringify(data))));
    }
  }

  createRecipe(recipe: IRecipe): Observable<IRecipe> {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    recipe.id = null;
    recipe.realeseDate = new Date().toISOString();
    return this.http.post<IRecipe>(this.recipeUrl, recipe, {headers})
                    .pipe(tap(data => console.log('getRecipe : ' + JSON.stringify(data))));
  }

  deleteRecipe(id: number): Observable<{}>{
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const url = `${this.recipeUrl}/${id}`;

    return this.http.delete<IRecipe>(url, {headers})
      .pipe(tap(data => console.log('delete recipe : ' + JSON.stringify(data))));
  }

  updateRecipe(recipe: IRecipe) :Observable<IRecipe> {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const url = `${this.recipeUrl}/{recipe.id}`;
    return this.http.put<IRecipe>(url, recipe, {headers})
                    .pipe(tap(() => console.log('Update recipe '+recipe.id)),
                    map(() => recipe));
  }

  /*private handleError(err){
    let errorMessage: string;
    if(err.error instanceof ErrorEvent){
      errorMessage = `L'application a rencontrer une erreur. Erreur: ${err.error.message}`
    } else{
      errorMessage = `Une erreur s'est produite. Code d'erreur: ${err.status}: ${err.body.error}`;
    }
    console.log(err);
    return errorMessage;
  }*/

  private initializeRecipe(): IRecipe {
    return {
        id: 0,
        recipeName: null,
        description: null,
        category: null,
        realeseDate: null,
        duration: null,
        ingredients: null,
        starRating: null,
        imageUrl: null
    };
  }

}
