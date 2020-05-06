import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe';
import { RecipeService } from '../recipe.service';
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

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getRecipe(id);
      }
    );
  }

  getRecipe(id: number){
    return this.recipeService.getRecipe(id).subscribe({
      next: recipe => this.onRecipeRetrieve(recipe),
      error: err => this.errorMessage = err
    });
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
