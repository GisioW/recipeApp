import { Component, OnInit } from '@angular/core';
import {IRecipe, RecipeResolved} from '../recipe';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  pageTitle = 'Detail du recette';
  recipe: IRecipe;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        const recipeData: RecipeResolved = data.recipeData;
        this.errorMessage = recipeData.error;
        this.onRecipeRetrieve(recipeData.recipe);
      }
    );
  }



  onRecipeRetrieve(recipe: IRecipe): void{
    this.recipe = recipe;
    if (recipe){
      this.pageTitle = `Detail du recette: ${this.recipe.recipeName}`;
    } else{
      this.pageTitle = 'Pas de recette trouver';
    }
  }

}
