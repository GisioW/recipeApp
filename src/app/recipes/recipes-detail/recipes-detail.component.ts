import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  pageTitle = 'Detail du recette';
  recipe: IRecipe;
  errorMessage: string;

  constructor(private recipeSercive: RecipeService) { }

  ngOnInit(): void {
  }

  getRecipe(id: number){
    return this.recipeSercive.getRecipe(id).subscribe({
      next: recipe => this.onRecipeRetrive(recipe),
      error: err => this.errorMessage = err
    })
  }

  onRecipeRetrive(recipe: IRecipe): void{
    this.recipe = recipe;
    if(recipe){
      this.pageTitle = `Detail du recette: ${this.recipe.recipeName}`;
    } else{
      this.pageTitle = 'Pas de recette trouver';
    }
  }

}
